import style from './FAQ.module.scss'
import { MessageSquareText, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import {
  EASE_OUT,
  revealOnScroll,
  riseVariants,
  staggerVariants,
} from './motionPresets'

// Answer expands to its natural height and fades in; reverses on close.
// The -12px margin cancels the item's 12px gap while collapsed, so nothing jumps.
const answerMotion = {
  initial: { height: 0, opacity: 0, marginTop: -12 },
  animate: { height: 'auto', opacity: 1, marginTop: 0 },
  exit: { height: 0, opacity: 0, marginTop: -12 },
  transition: { duration: 0.35, ease: EASE_OUT },
}

const faqItems = [
  {
    question: 'When does myHomeBase launch?',
    answer:
      'We’re opening early access in select areas first. Sign up and we’ll email you as soon as we’re live near you.',
  },
  {
    question: 'Is it free for homeowners?',
    answer:
      'Joining early access is free. You can compare upfront prices before deciding which service to book.',
  },
  {
    question: 'Will pros call or text me?',
    answer:
      'No. Pros message you through the app, and your phone number stays private unless you choose to share it.',
  },
  {
    question: 'How are pros verified?',
    answer:
      'Pros are verified before they can list on myHomeBase. Ratings are based on real, completed jobs.',
  },
  {
    question: 'How is the upfront price set?',
    answer:
      'Prices are based on the service and job details you provide. You can compare available prices before booking.',
  },
  {
    question: 'I’m a service pro. Can I join?',
    answer:
      'Yes. Service pros can sign up for early access and share the services they offer and the areas they serve.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main id="faq" className={style.faqMain}>
      <m.div
        className={style.faqHeading}
        variants={staggerVariants(0.08)}
        {...revealOnScroll}
      >
        <m.label variants={riseVariants}>
          <span className={style.labelNumber}>(06)</span>
          <span className={style.labelText}>FAQ</span>
        </m.label>
        <m.h2 className={style.sectionTitle} variants={riseVariants}>
          Questions, answered.
        </m.h2>
        <m.span className={style.sectionDescp} variants={riseVariants}>
          Everything you need to know about early access and how myHomeBase
          works.
        </m.span>
        <m.div
          id="contact"
          className={style.contactBox}
          variants={riseVariants}
        >
          <div className={style.buttonFrameIcon}>
            <MessageSquareText
              size={20}
              style={{ flexShrink: 0 }}
              color="#1D4ED8"
            />
          </div>
          <div className={style.buttonFrame}>
            <span className={style.buttonTitle}>Still have questions?</span>
            <a href="mailto:hello@myhomebase.com" className={style.buttonDescp}>
              hello@myhomebase.com
            </a>
          </div>
        </m.div>
      </m.div>
      <m.div
        className={style.accordion}
        variants={staggerVariants(0.06, 0.1)}
        {...revealOnScroll}
      >
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <m.div
              className={isOpen ? style.FAQItemOpen : style.FAQItemClosed}
              key={item.question}
              variants={riseVariants}
            >
              <div className={style.itemFrame}>
                <h3 className={style.itemTitle}>{item.question}</h3>
                <button
                  type="button"
                  className={style.itemButton}
                  aria-label={`${isOpen ? 'Hide' : 'Show'} answer: ${item.question}`}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {/* half-turn as + becomes − (and back) */}
                  <m.span
                    className={style.itemIcon}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                  >
                    {isOpen ? (
                      <Minus size={15} style={{ flexShrink: 0 }} color="#fff" />
                    ) : (
                      <Plus
                        size={15}
                        style={{ flexShrink: 0 }}
                        color="#475569"
                      />
                    )}
                  </m.span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    key="answer"
                    id={answerId}
                    className={style.answerWrap}
                    {...answerMotion}
                  >
                    <p className={style.itemDescp}>{item.answer}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          )
        })}
      </m.div>
    </main>
  )
}
