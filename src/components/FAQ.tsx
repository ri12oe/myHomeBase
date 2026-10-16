import styles from './FAQ.module.scss'
import { MessageSquareText, Minus, Plus } from 'lucide-react'
import { useState } from 'react'

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
    <main className={styles.faqMain}>
      <div className={styles.faqHeading}>
        <label>
          <span className={styles.labelNumber}>(06)</span>
          <span className={styles.labelText}>FAQ</span>
        </label>
        <h2 className={styles.sectionTitle}>Questions, answered.</h2>
        <span className={styles.sectionDescp}>
          Everything you need to know about early access and how myHomeBase
          works.
        </span>
        <div className={styles.contactBox}>
          <div className={styles.buttonFrameIcon}>
            <MessageSquareText
              size={20}
              style={{ flexShrink: 0 }}
              color="#1D4ED8"
            />
          </div>
          <div className={styles.buttonFrame}>
            <span className={styles.buttonTitle}>Still have questions?</span>
            <a
              href="mailto:hello@myhomebase.com"
              className={styles.buttonDescp}
            >
              hello@myhomebase.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.accordion}>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <div
              className={isOpen ? styles.FAQItemOpen : styles.FAQItemClosed}
              key={item.question}
            >
              <div className={styles.itemFrame}>
                <h3 className={styles.itemTitle}>{item.question}</h3>
                <button
                  type="button"
                  className={styles.itemButton}
                  aria-label={`${isOpen ? 'Hide' : 'Show'} answer: ${item.question}`}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {isOpen ? (
                    <Minus size={15} style={{ flexShrink: 0 }} color="#fff" />
                  ) : (
                    <Plus size={15} style={{ flexShrink: 0 }} color="#475569" />
                  )}
                </button>
              </div>
              <p id={answerId} className={styles.itemDescp} hidden={!isOpen}>
                {item.answer}
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
