import style from './finalCTA.module.scss'
import CheckIcon from './CheckIcon'
import { Mail, MapPin, Lock } from 'lucide-react'
import ArrowRightIcon from './ArrowRightIcon'
import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'

export default function FinalCTA() {
  const [selectedRole, setSelectedRole] = useState<'homeowner' | 'pro'>(
    'homeowner',
  )
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

  return (
    <main className={style.finalMain}>
      <div className={style.CTAband}>
        <div className={style.CTACopy}>
          <label>
            <span className={style.labelNumber}>(07)</span>
            <span className={style.labelText}>Early Access</span>
          </label>
          <h2 className={style.sectionTitle}>
            Be first in line when we launch near you.
          </h2>
          <span className={style.sectionDescp}>
            Join early access and we’ll let you know the moment myHomeBase opens
            in your area.
          </span>
          <div className={style.perks}>
            <div className={style.perksFrame}>
              <div className={style.perkIconFrame}>
                <CheckIcon size={12} flex-shrink={0} color="#2563EB" />
              </div>
              <span className={style.perkText}>
                First to know when we launch in your area
              </span>
            </div>
            <div className={style.perksFrame}>
              <div className={style.perkIconFrame}>
                <CheckIcon size={12} flex-shrink={0} color="#2563EB" />
              </div>
              <span className={style.perkText}>
                Help decide which services launch first
              </span>
            </div>
            <div className={style.perksFrame}>
              <div className={style.perkIconFrame}>
                <CheckIcon size={12} flex-shrink={0} color="#2563EB" />
              </div>
              <span className={style.perkText}>
                Free to join — no credit card
              </span>
            </div>
          </div>
        </div>
        <form>
          <h3>Get early access</h3>
          <div
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
          </div>
          <div className={style.field}>
            <label>Email</label>
            <div className={style.inputWrapper}>
              <Mail size={16} color="#94A3B8"/>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className={style.field}>
            <label>Zip code (Optional)</label>
            <div className={style.inputWrapper}>
              <MapPin size={16} color="#94A3B8"/>
              <input type="text" placeholder="e.g. 47401" />
            </div>
          </div>
          <button className={style.buttonPrimary}>
            <span className={style.buttonPrimaryText}>Get early access</span>
            <ArrowRightIcon size={16} color="#fff" />
          </button>
          <div className={style.note}>
            <Lock size={12} color="#64748B" />
            <span className={style.noteText}>No spam. We never share your email.</span>
          </div>
        </form>
      </div>
    </main>
  )
}
