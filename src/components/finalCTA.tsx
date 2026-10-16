import style from './finalCTA.module.scss'
import CheckIcon from './CheckIcon'
import { Mail, MapPin, Lock } from 'lucide-react'
import ArrowRightIcon from './ArrowRightIcon'
import {
  useRef,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { AnimatePresence, m, type Variants } from 'motion/react'
import { EASE_OUT, revealOnScroll, riseVariants } from './motionPresets'

const PERKS = [
  'First to know when we launch in your area',
  'Help decide which services launch first',
  'Free to join — no credit card',
]

// The whole band settles in from a slight scale, then its two halves play out.
const bandVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

// Copy and form each reveal their own pieces one after another.
const columnVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

// Form ↔ success swap.
const swapVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT, staggerChildren: 0.07 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function FinalCTA() {
  const [selectedRole, setSelectedRole] = useState<'homeowner' | 'pro'>(
    'homeowner',
  )
  const [submitted, setSubmitted] = useState(false)
  const roleToggleRef = useRef<HTMLDivElement>(null)
  const isDraggingRole = useRef(false)

  const selectRoleAtPointer = (clientX: number) => {
    const bounds = roleToggleRef.current?.getBoundingClientRect()
    if (!bounds) return

    setSelectedRole(
      clientX < bounds.left + bounds.width / 2 ? 'homeowner' : 'pro',
    )
  }

  const handleRolePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    isDraggingRole.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    selectRoleAtPointer(event.clientX)
  }

  const handleRolePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (isDraggingRole.current) selectRoleAtPointer(event.clientX)
  }

  const handleRolePointerEnd = () => {
    isDraggingRole.current = false
  }

  // No backend yet: stop the page reload and show the confirmation.
  // The browser's built-in check (required + type="email") runs before this.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main id="early-access" className={style.finalMain}>
      <m.div
        className={style.CTAband}
        variants={bandVariants}
        {...revealOnScroll}
      >
        <m.div className={style.CTACopy} variants={columnVariants}>
          <m.label variants={riseVariants}>
            <span className={style.labelNumber}>(07)</span>
            <span className={style.labelText}>Early Access</span>
          </m.label>
          <m.h2 className={style.sectionTitle} variants={riseVariants}>
            Be first in line when we launch near you.
          </m.h2>
          <m.span className={style.sectionDescp} variants={riseVariants}>
            Join early access and we’ll let you know the moment myHomeBase opens
            in your area.
          </m.span>
          <m.div className={style.perks} variants={columnVariants}>
            {PERKS.map((perk) => (
              <m.div
                key={perk}
                className={style.perksFrame}
                variants={riseVariants}
              >
                <div className={style.perkIconFrame}>
                  <CheckIcon size={12} flex-shrink={0} color="#2563EB" />
                </div>
                <span className={style.perkText}>{perk}</span>
              </m.div>
            ))}
          </m.div>
        </m.div>
        <m.form onSubmit={handleSubmit} variants={riseVariants}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <m.div
                key="success"
                className={style.success}
                variants={swapVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                role="status"
              >
                <m.div
                  className={style.successIcon}
                  variants={{
                    hidden: { scale: 0.5, opacity: 0 },
                    show: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 18,
                      },
                    },
                  }}
                >
                  <CheckIcon size={22} color="#fff" />
                </m.div>
                <m.h3 variants={riseVariants}>You’re on the list!</m.h3>
                <m.p className={style.successText} variants={riseVariants}>
                  We’ll email you when myHomeBase launches near you.
                  {selectedRole === 'pro' &&
                    ' We’ll also send details on joining as a pro.'}
                </m.p>
              </m.div>
            ) : (
              // No initial/animate here: the fields follow the card's scroll
              // reveal and fill in top to bottom. `exit` runs on submit.
              <m.div
                key="form"
                className={style.formFields}
                variants={swapVariants}
                exit="exit"
              >
                <m.h3 variants={riseVariants}>Get early access</m.h3>
                <m.div
                  ref={roleToggleRef}
                  className={`${style.roleToggle} ${
                    selectedRole === 'pro' ? style.proSelected : ''
                  }`}
                  role="group"
                  aria-label="Choose your role"
                  onPointerDown={handleRolePointerDown}
                  onPointerMove={handleRolePointerMove}
                  onPointerUp={handleRolePointerEnd}
                  onPointerCancel={handleRolePointerEnd}
                  variants={riseVariants}
                >
                  <span className={style.roleThumb} aria-hidden="true" />
                  <button
                    type="button"
                    className={`${style.roleButton} ${
                      selectedRole === 'homeowner' ? style.activeRoleButton : ''
                    }`}
                    aria-pressed={selectedRole === 'homeowner'}
                    onClick={() => setSelectedRole('homeowner')}
                  >
                    I'm a homeowner
                  </button>
                  <button
                    type="button"
                    className={`${style.roleButton} ${
                      selectedRole === 'pro' ? style.activeRoleButton : ''
                    }`}
                    aria-pressed={selectedRole === 'pro'}
                    onClick={() => setSelectedRole('pro')}
                  >
                    I'm a service pro
                  </button>
                </m.div>
                <m.div className={style.field} variants={riseVariants}>
                  <label htmlFor="cta-email">Email</label>
                  <div className={style.inputWrapper}>
                    <Mail size={16} color="#94A3B8" />
                    <input
                      id="cta-email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </m.div>
                <m.div className={style.field} variants={riseVariants}>
                  <label htmlFor="cta-zip">Zip code (Optional)</label>
                  <div className={style.inputWrapper}>
                    <MapPin size={16} color="#94A3B8" />
                    <input
                      id="cta-zip"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      placeholder="e.g. 47401"
                      autoComplete="postal-code"
                    />
                  </div>
                </m.div>
                <m.button
                  type="submit"
                  className={style.buttonPrimary}
                  variants={riseVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={style.buttonPrimaryText}>
                    Get early access
                  </span>
                  <ArrowRightIcon size={16} color="#fff" />
                </m.button>
                <m.div className={style.note} variants={riseVariants}>
                  <Lock size={12} color="#64748B" />
                  <span className={style.noteText}>
                    No spam. We never share your email.
                  </span>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>
        </m.form>
      </m.div>
    </main>
  )
}
