import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion } from 'motion/react';
import styles from './ShowcasePanel.module.scss';
import { EASE_OUT } from './motionPresets';

/* ------------------------------------------------------------------ */
/* Entrance timing (seconds after page load)                           */
/* The hero copy runs from 0 to ~0.5s; the devices follow.             */
/* ------------------------------------------------------------------ */

const ENTRANCE = {
  laptop: 0.6,
  phoneLeft: 0.85,
  phoneRight: 0.95,
  rows: 1.35,
};

// Devices rise into place. Phones also drift in from their side with a slight tilt.
const deviceRise = (delay: number, side: -1 | 0 | 1 = 0) => ({
  initial: { opacity: 0, x: side * 40, y: side ? 90 : 80, rotate: side * 3 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
  transition: { duration: 1.1, delay, ease: EASE_OUT },
});

/* ------------------------------------------------------------------ */
/* Data — illustrative UI content, not real businesses or reviews      */
/* ------------------------------------------------------------------ */

type Tone = 'green' | 'blue' | 'amber';

interface Pro {
  initials: string;
  name: string;
  rating: string;
  day: string;
  nextOpen: string;
  price: number;
  tone: Tone;
  best?: boolean;
}

interface Message {
  from: 'pro' | 'me';
  text: string;
}

const PROS: Pro[] = [
  { initials: 'BN', name: 'Bright Nest', rating: '4.7', day: 'Sat', nextOpen: 'Sat, 9:00 AM', price: 172, tone: 'green', best: true },
  { initials: 'SC', name: 'Sparkle & Co.', rating: '4.9', day: 'Thu', nextOpen: 'Thu, 1:00 PM', price: 189, tone: 'blue' },
  { initials: 'GH', name: 'Greenway Home', rating: '4.8', day: 'Fri', nextOpen: 'Fri, 11:00 AM', price: 205, tone: 'amber' },
];

const JOB_STEPS = ['Booked', 'Confirmed', 'On the way', 'Working', 'Done'];
const CURRENT_STEP = 2;

const MESSAGES: Message[] = [
  { from: 'pro', text: 'Hi Alex, confirming Thursday at 10. Anything we should know?' },
  { from: 'me', text: 'Side gate code is in the job notes. One very friendly dog.' },
  { from: 'pro', text: 'Perfect. We’ll bring pet-safe supplies.' },
];

const SIDEBAR_LINKS = [
  { label: 'Home' },
  { label: 'Compare prices', active: true },
  { label: 'My jobs' },
  { label: 'Messages', badge: 2 },
  { label: 'Saved pros' },
];

const toneClass: Record<Tone, string> = {
  green: styles.toneGreen,
  blue: styles.toneBlue,
  amber: styles.toneAmber,
};

/* ------------------------------------------------------------------ */
/* Stage scaling                                                       */
/* The scene is drawn on a fixed canvas (1200×680 desktop, 700×900     */
/* compact) and scaled to the container width.                         */
/* ------------------------------------------------------------------ */

const STAGE = {
  wide: { width: 1200, height: 680 },
  compact: { width: 700, height: 900 },
} as const;

const COMPACT_BREAKPOINT = 768;

function useStageScale() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ scale: 1, compact: false });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      const compact = width < COMPACT_BREAKPOINT;
      const stageWidth = compact ? STAGE.compact.width : STAGE.wide.width;
      setState({ scale: width / stageWidth, compact });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, ...state };
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

type IconName = 'house' | 'chevronLeft' | 'shield' | 'lock' | 'arrowUp';

const ICON_PATHS: Record<IconName, ReactNode> = {
  house: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={[styles.icon, className].filter(Boolean).join(' ')} viewBox="0 0 24 24" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className={`${styles.logo} ${small ? styles.logoSmall : ''}`}>
      <span className={styles.logoMark}>
        <Icon name="house" />
      </span>
      <span>
        <em>my</em>HomeBase
      </span>
    </div>
  );
}

function Avatar({ pro, large = false }: { pro: Pro; large?: boolean }) {
  return (
    <span className={`${styles.avatar} ${toneClass[pro.tone]} ${large ? styles.avatarLarge : ''}`}>
      {pro.initials}
    </span>
  );
}

function HiddenNote({ children }: { children: string }) {
  return (
    <div className={styles.hiddenNote}>
      <Icon name="lock" />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Laptop — myHomeBase web app                                         */
/* ------------------------------------------------------------------ */

function Laptop() {
  return (
    <div className={styles.laptop}>
      <div className={styles.lid}>
        <div className={styles.screen}>
          <aside className={styles.sidebar}>
            <Logo small />
            {SIDEBAR_LINKS.map((link) => (
              <span key={link.label} className={`${styles.sideLink} ${link.active ? styles.sideLinkActive : ''}`}>
                {link.label}
                {link.badge !== undefined && <span className={styles.badge}>{link.badge}</span>}
              </span>
            ))}
            <div className={styles.user}>
              <i />
              Alex M.
            </div>
          </aside>

          <div className={styles.main}>
            <div className={styles.mainHeader}>
              <div className={styles.titleBlock}>
                <b>Deep clean · 3 bed / 2 bath</b>
                <span>This week · 3 verified pros · prices are upfront</span>
              </div>
              <div className={styles.chips}>
                <span className={`${styles.chip} ${styles.chipActive}`}>Price ↑</span>
                <span className={styles.chip}>Rating</span>
                <span className={styles.chip}>Soonest</span>
              </div>
            </div>

            <div className={styles.table}>
              <div className={`${styles.row} ${styles.rowHead}`}>
                <span>Pro</span>
                <span>Rating</span>
                <span>Next open</span>
                <span>Price</span>
                <span />
              </div>
              {PROS.map((pro, i) => (
                <m.div
                  key={pro.name}
                  className={`${styles.row} ${pro.best ? styles.rowBest : ''}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: ENTRANCE.rows + i * 0.1, ease: EASE_OUT }}
                >
                  <div className={styles.proCell}>
                    <Avatar pro={pro} />
                    <div>
                      <b>{pro.name}</b>
                      <small>✓ Verified</small>
                    </div>
                  </div>
                  <span>★ {pro.rating}</span>
                  <span className={styles.muted}>{pro.nextOpen}</span>
                  <span className={styles.price}>
                    ${pro.price}
                    {pro.best && <span className={`${styles.pill} ${styles.pillAmber}`}>Best</span>}
                  </span>
                  <span className={`${styles.miniBtn} ${pro.best ? styles.miniBtnPrimary : ''}`}>Book</span>
                </m.div>
              ))}
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleBlock}>
                    <b className={styles.cardTitle}>Lawn mowing · Greenway Home</b>
                    <span>Today · arriving 2:15 PM</span>
                  </div>
                  <span className={`${styles.pill} ${styles.pillBlue}`}>On the way</span>
                </div>
                <div className={styles.track}>
                  {JOB_STEPS.map((step, i) => (
                    <i key={step} className={i <= CURRENT_STEP ? styles.trackDone : undefined} />
                  ))}
                </div>
                <div className={styles.trackLabels}>
                  {JOB_STEPS.map((step, i) => (
                    <span key={step} className={i === CURRENT_STEP ? styles.trackCurrent : undefined}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <b className={styles.cardTitle}>Messages</b>
                  <span className={styles.newCount}>2 new</span>
                </div>
                <div className={styles.bubble}>
                  <small>Greenway Home</small>
                  Running about 10 minutes early. Gate code still 4412?
                </div>
                <HiddenNote>Your number stays hidden</HiddenNote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.base} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phones                                                              */
/* ------------------------------------------------------------------ */

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneScreen}>
        <div className={styles.statusBar}>
          <span>9:41</span>
          <i className={styles.island} />
          <i className={styles.battery} />
        </div>
        {children}
      </div>
    </div>
  );
}

function PhoneHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.phoneHeader}>
      <span className={styles.back}>
        <Icon name="chevronLeft" />
      </span>
      <div>
        <b>{title}</b>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

function ComparePhone() {
  const best = PROS.find((p) => p.best) ?? PROS[0];
  return (
    <PhoneFrame>
      <PhoneHeader title="Deep clean" subtitle="3 bed · 2 bath · This week" />
      <div className={styles.phoneChips}>
        <span className={styles.phoneChipActive}>Price ↑</span>
        <span>Rating</span>
        <span>Soonest</span>
      </div>
      <div className={styles.caption}>
        <Icon name="shield" />3 verified pros · upfront prices
      </div>

      {PROS.map((pro) => (
        <div key={pro.name} className={`${styles.proCard} ${pro.best ? styles.proCardBest : ''}`}>
          <Avatar pro={pro} large />
          <div className={styles.proInfo}>
            <b>{pro.name}</b>
            <span>
              ★ {pro.rating} · {pro.day}
            </span>
            <span className={styles.verified}>✓ Verified</span>
          </div>
          <div className={styles.proPrice}>
            {pro.best && <span className={`${styles.pill} ${styles.pillAmber}`}>Best price</span>}
            <b>${pro.price}</b>
            <span>total</span>
          </div>
        </div>
      ))}

      <div className={styles.grow} />
      <HiddenNote>Number hidden · chat in-app</HiddenNote>
      <div className={styles.bookBtn}>Book now · ${best.price}</div>
    </PhoneFrame>
  );
}

/* Chat replay ------------------------------------------------------- */
/* The conversation starts complete (so the page reads fine at rest),  */
/* then loops: clear → typing dots → message → … → hold → repeat.      */

interface ChatStep {
  shown: number; // how many messages are visible
  typing: Message['from'] | null; // who is "typing", if anyone
  hold: number; // ms to stay on this step
}

const CHAT_STEPS: ChatStep[] = [
  { shown: MESSAGES.length, typing: null, hold: 4200 }, // first view: full conversation
  { shown: 0, typing: null, hold: 500 }, // clear
  ...MESSAGES.flatMap((msg, i): ChatStep[] => [
    { shown: i, typing: msg.from, hold: msg.from === 'me' ? 900 : 1300 },
    { shown: i + 1, typing: null, hold: i === MESSAGES.length - 1 ? 5200 : 900 },
  ]),
];
const CHAT_LOOP_START = 1; // after the first pass, loop from "clear"

function useChatReplay(running: boolean) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!running) return; // paused: off-screen or reduced motion
    const timer = window.setTimeout(() => {
      setStep((s) => (s + 1 < CHAT_STEPS.length ? s + 1 : CHAT_LOOP_START));
    }, CHAT_STEPS[step].hold);
    return () => window.clearTimeout(timer);
  }, [step, running]);

  return CHAT_STEPS[step];
}

const bubbleMotion = {
  initial: { opacity: 0, y: 10, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, transition: { duration: 0.2 } },
  transition: { duration: 0.45, ease: EASE_OUT },
};

function ChatPhone() {
  const chatRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chatRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const { shown, typing } = useChatReplay(inView && !reduceMotion);

  return (
    <PhoneFrame>
      <PhoneHeader title="Bright Nest" subtitle="Verified pro · Deep clean" />
      <div className={styles.booked}>
        <span>Booked · Thu, 10:00 AM</span>
        <span>$172</span>
      </div>
      <div className={styles.day}>Today</div>
      <div className={styles.chat} ref={chatRef}>
        <AnimatePresence initial={false}>
          {MESSAGES.slice(0, shown).map((msg) => (
            <m.div
              key={msg.text}
              className={`${styles.message} ${msg.from === 'me' ? styles.messageMe : ''}`}
              {...bubbleMotion}
            >
              {msg.text}
            </m.div>
          ))}
          {typing && (
            <m.div
              key="typing"
              className={`${styles.typing} ${typing === 'me' ? styles.typingMe : ''}`}
              {...bubbleMotion}
            >
              <i />
              <i />
              <i />
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <HiddenNote>Your number stays hidden</HiddenNote>
      <div className={styles.chatInput}>
        <span>Message Bright Nest…</span>
        <i>
          <Icon name="arrowUp" />
        </i>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Showcase panel                                                      */
/* ------------------------------------------------------------------ */

interface ShowcasePanelProps {
  className?: string;
}

export default function ShowcasePanel({ className }: ShowcasePanelProps) {
  const { ref, scale, compact } = useStageScale();

  return (
    <div
      ref={ref}
      className={[styles.panel, compact ? styles.panelCompact : '', className].filter(Boolean).join(' ')}
      role="img"
      aria-label="myHomeBase on a laptop and two phones: comparing upfront prices from three verified pros, and an in-app chat with the booked pro."
    >
      <div className={styles.halftone} aria-hidden="true" />
      <div
        className={`${styles.stage} ${compact ? styles.stageCompact : ''}`}
        style={{ transform: `scale(${scale})` }}
        aria-hidden="true"
      >
        {/* The outer divs position/scale each device; the inner m.div animates,
            so the entrance transform never overwrites the layout transform. */}
        <div className={`${styles.device} ${styles.laptopPos}`}>
          <m.div {...deviceRise(ENTRANCE.laptop)}>
            <Laptop />
          </m.div>
        </div>
        <div className={`${styles.device} ${styles.phonePos} ${styles.phoneLeft}`}>
          <m.div {...deviceRise(ENTRANCE.phoneLeft, -1)}>
            <ComparePhone />
          </m.div>
        </div>
        <div className={`${styles.device} ${styles.phonePos} ${styles.phoneRight}`}>
          <m.div {...deviceRise(ENTRANCE.phoneRight, 1)}>
            <ChatPhone />
          </m.div>
        </div>
      </div>
    </div>
  );
}
