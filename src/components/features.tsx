import style from './features.module.scss'
import HeaderRow from './HeaderRow'
import CheckIcon from './CheckIcon'
export default function Features() {
  return (
    <main className={style.featureMain}>
      <HeaderRow
        labelNumber="(03)"
        labelText="Features"
        title="Everything you need to hire with confidence."
        description="Built around the three things quote sites get wrong: the price, your privacy, and what happens after you book."
        colorTheme="dark"
      />
      <div className={style.bento}>
        <div className={style.bentoTop}>
          <div className={style.left}>
            <div className={style.transparentPricing}>
              <div className={style.transparentPricingFrame}>
                <div className={style.transparentPricingInnerFrame}>
                  <div className={style.transparentPricingInnerInnerFrame}>
                    <span className={style.transparentPricingTitle}>
                      Transparent pricing
                    </span>
                    <span className={style.transparentPricingDescription}>
                      The price you see is the price you book. Compare price,
                      rating and next availability side by side — no “we’ll need
                      to come take a look.”
                    </span>
                  </div>
                </div>
                <div className={style.priceComparison}>
                  <div className={style.priceComparisonTopFrame}>
                    <span className={style.subTitle}>Lawn mowing · ¼ acre</span>
                    <span className={style.quote}>3 quotes</span>
                  </div>
                  <div className={style.priceComparisonFrame}>
                    <div className={style.priceComparisonInnerFrame}>
                      <span className={style.priceTitle}>GreenLine Lawn</span>
                      <div className={style.pill}>
                        <span className={style.pillText}>Best price</span>
                      </div>
                      <span className={style.price}>$45</span>
                    </div>
                    <div className={style.track}>
                      <div
                        className={`${style.bar} ${style.highlighted}`}
                      ></div>
                    </div>
                  </div>
                  <div className={style.priceComparisonFrame}>
                    <div className={style.priceComparisonInnerFrame}>
                      <span className={style.priceTitle}>Mow Pros</span>
                      <span className={style.price}>$55</span>
                    </div>
                    <div className={style.track}>
                      <div className={`${style.bar} ${style.long}`}></div>
                    </div>
                  </div>
                  <div className={style.priceComparisonFrame}>
                    <div className={style.priceComparisonInnerFrame}>
                      <span className={style.priceTitle}>Yard Masters</span>
                      <span className={style.price}>$68</span>
                    </div>
                    <div className={style.track}>
                      <div className={`${style.bar} ${style.longer}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.bentoMiddle}>
              <div className={style.featuresBlock}>
                <div className={style.verifiedFrame}>
                  <span className={style.verifiedText}>
                    Verified professionals
                  </span>
                  <span className={style.verifiedDesp}>
                    Every pro is verified before they can list on myHomeBase.
                  </span>
                </div>
                <div className={style.verifiedBottomFrame}>
                  <div className={style.pillverifted}>
                    <CheckIcon size={14} color={'#047857'} />
                    <span className={style.pillTextVeri}>ID verifed</span>
                  </div>
                  <div className={style.pillverifted}>
                    <CheckIcon size={14} color={'#047857'} />
                    <span className={style.pillTextVeri}>
                      Background checked
                    </span>
                  </div>
                  <div className={style.pillverifted}>
                    <CheckIcon size={14} color={'#047857'} />
                    <span className={style.pillTextVeri}>
                      Licensed & insured
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.featuresBlock}>
                <div className={style.verifiedFrame}>
                  <span className={style.verifiedText}>In-app messaging</span>
                  <span className={style.verifiedDesp}>
                    Questions, photos and updates in one thread per job.
                  </span>
                </div>
                <div className={style.messageBlock}>
                  <div className={style.reciverFrame}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z"
                        stroke="#475569"
                        strokeWidth={1.16667}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.24998 6.41683C5.89431 6.41683 6.41665 5.89449 6.41665 5.25016C6.41665 4.60583 5.89431 4.0835 5.24998 4.0835C4.60565 4.0835 4.08331 4.60583 4.08331 5.25016C4.08331 5.89449 4.60565 6.41683 5.24998 6.41683Z"
                        stroke="#475569"
                        strokeWidth={1.16667}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.25 8.75016L9.33335 5.8335L2.91669 12.2502"
                        stroke="#475569"
                        strokeWidth={1.16667}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={style.reciverText}>kitchen_sink.jpg</span>
                  </div>
                  <div className={style.giverFramer}>
                    <div className={style.giverInnerFrame}>
                      Got it — bringing the right part.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.privacy}>
            <div className={style.verifiedFrame}>
              <span className={style.verifiedText}>Privacy by default</span>
              <span className={style.verifiedDesp}>
                Your phone and email stay hidden. Pros reach you through the app
                — only after you book.
              </span>
            </div>
            <div className={style.contactCard}>
              <span className={style.contactCardText}>Your contact info</span>
              <div className={style.contactFrame}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14.6666 11.2802V13.2802C14.6674 13.4659 14.6294 13.6497 14.555 13.8198C14.4806 13.9899 14.3715 14.1426 14.2347 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5846 14.6082 13.3982 14.6303 13.2133 14.6136C11.1619 14.3907 9.19131 13.6897 7.45998 12.5669C5.84919 11.5433 4.48353 10.1777 3.45998 8.56689C2.33329 6.8277 1.63214 4.84756 1.41331 2.78689C1.39665 2.60254 1.41856 2.41673 1.47764 2.24131C1.53673 2.06589 1.63169 1.90469 1.75649 1.76797C1.88128 1.63126 2.03318 1.52203 2.2025 1.44724C2.37183 1.37245 2.55487 1.33374 2.73998 1.33356H4.73998C5.06351 1.33038 5.37717 1.44495 5.62248 1.65592C5.8678 1.86689 6.02803 2.15986 6.07331 2.48023C6.15772 3.12027 6.31428 3.74871 6.53998 4.35356C6.62967 4.59218 6.64908 4.8515 6.59591 5.10081C6.54274 5.35012 6.41922 5.57897 6.23998 5.76023L5.39331 6.60689C6.34235 8.27592 7.72428 9.65786 9.39331 10.6069L10.24 9.76023C10.4212 9.58099 10.6501 9.45746 10.8994 9.40429C11.1487 9.35112 11.408 9.37053 11.6466 9.46023C12.2515 9.68593 12.8799 9.84248 13.52 9.92689C13.8438 9.97258 14.1396 10.1357 14.351 10.3852C14.5624 10.6348 14.6748 10.9533 14.6666 11.2802Z"
                    stroke="#64748B"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={style.contactCardInfo}>(•••) •••-••42</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.58663 6.58643C6.39013 6.76952 6.23253 6.99033 6.12321 7.23566C6.0139 7.48099 5.95512 7.74582 5.95038 8.01437C5.94565 8.28291 5.99505 8.54965 6.09563 8.79869C6.19622 9.04772 6.34594 9.27394 6.53586 9.46386C6.72578 9.65378 6.952 9.8035 7.20104 9.90409C7.45007 10.0047 7.71681 10.0541 7.98536 10.0493C8.2539 10.0446 8.51873 9.98582 8.76406 9.87651C9.0094 9.7672 9.2302 9.60959 9.4133 9.41309"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.15332 3.38683C7.43419 3.35184 7.71694 3.33402 7.99999 3.3335C12.6667 3.3335 14.6667 8.00016 14.6667 8.00016C14.3686 8.63824 13.9948 9.23812 13.5533 9.78683"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.40671 4.40674C3.08096 5.30992 2.02006 6.55032 1.33337 8.00007C1.33337 8.00007 3.33337 12.6667 8.00004 12.6667C9.27731 12.6702 10.5272 12.2968 11.5934 11.5934"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.33337 1.3335L14.6667 14.6668"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={style.contactFrame}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13.3333 2.6665H2.66665C1.93027 2.6665 1.33331 3.26346 1.33331 3.99984V11.9998C1.33331 12.7362 1.93027 13.3332 2.66665 13.3332H13.3333C14.0697 13.3332 14.6666 12.7362 14.6666 11.9998V3.99984C14.6666 3.26346 14.0697 2.6665 13.3333 2.6665Z"
                    stroke="#64748B"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6666 4.6665L7.99998 8.6665L1.33331 4.6665"
                    stroke="#64748B"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={style.contactCardInfo}>j••••••@•••••.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.58663 6.58643C6.39013 6.76952 6.23253 6.99033 6.12321 7.23566C6.0139 7.48099 5.95512 7.74582 5.95038 8.01437C5.94565 8.28291 5.99505 8.54965 6.09563 8.79869C6.19622 9.04772 6.34594 9.27394 6.53586 9.46386C6.72578 9.65378 6.952 9.8035 7.20104 9.90409C7.45007 10.0047 7.71681 10.0541 7.98536 10.0493C8.2539 10.0446 8.51873 9.98582 8.76406 9.87651C9.0094 9.7672 9.2302 9.60959 9.4133 9.41309"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.15332 3.38683C7.43419 3.35184 7.71694 3.33402 7.99999 3.3335C12.6667 3.3335 14.6667 8.00016 14.6667 8.00016C14.3686 8.63824 13.9948 9.23812 13.5533 9.78683"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.40671 4.40674C3.08096 5.30992 2.02006 6.55032 1.33337 8.00007C1.33337 8.00007 3.33337 12.6667 8.00004 12.6667C9.27731 12.6702 10.5272 12.2968 11.5934 11.5934"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.33337 1.3335L14.6667 14.6668"
                    stroke="#94A3B8"
                    strokeWidth={1.33333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={style.contactPill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M11.0833 6.4165H2.91667C2.27233 6.4165 1.75 6.93884 1.75 7.58317V11.6665C1.75 12.3108 2.27233 12.8332 2.91667 12.8332H11.0833C11.7277 12.8332 12.25 12.3108 12.25 11.6665V7.58317C12.25 6.93884 11.7277 6.4165 11.0833 6.4165Z"
                    stroke="#1D4ED8"
                    strokeWidth={1.45833}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.08331 6.4165V4.08317C4.08331 3.30962 4.3906 2.56776 4.93758 2.02078C5.48457 1.47379 6.22643 1.1665 6.99998 1.1665C7.77353 1.1665 8.51539 1.47379 9.06237 2.02078C9.60936 2.56776 9.91665 3.30962 9.91665 4.08317V6.4165"
                    stroke="#1D4ED8"
                    strokeWidth={1.45833}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={style.contactPillText}>
                  Hidden until you choose
                </span>
              </div>
            </div>
            <div className={style.callout}>
              <span className={style.calloutLabel}>0</span>
              <span className={style.calloutText}>
                companies your number gets passed to
              </span>
            </div>
          </div>
        </div>
        <div className={style.featureJobTracking}>
          <div className={style.featureJobFrame}>
            <div className={style.verifiedFrame}>
              <span className={style.verifiedText}>Job tracking</span>
              <span className={style.verifiedDesp}>
                Know exactly where every job stands, from the moment you book to
                the moment it’s done.
              </span>
            </div>
          </div>
          <div className={style.timeline}>
            <div className={style.timelineFrame}>
              <div className={style.timelineInnerFrame}>
                <span className={style.line}></span>
                <div
                  className={`${style.dot} ${style.completedDot} ${style.mobileCompleteDot}`}
                >
                  <CheckIcon size={16} color="#fff" />
                </div>
                <span className={`${style.line} ${style.bluelined}`}></span>
              </div>
              <span className={style.timelineLabel}>Booked</span>
              <span className={style.timelineTime}>Mon 9:02 AM</span>
            </div>
            <div className={style.timelineFrame}>
              <div className={style.timelineInnerFrame}>
                <span className={`${style.line} ${style.bluelined}`}></span>
                <div
                  className={`${style.dot} ${style.completedDot} ${style.mobileCompleteDot}`}
                >
                  <CheckIcon size={16} color="#fff" />
                </div>
                <span className={`${style.line} ${style.bluelined}`}></span>
              </div>
              <span className={style.timelineLabel}>Confirmed</span>
              <span className={style.timelineTime}>Mon 9:15 AM</span>
            </div>
            <div className={style.timelineFrame}>
              <div className={style.timelineInnerFrame}>
                <span className={`${style.line} ${style.bluelined}`}></span>
                <div className={style.dot}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx={6} cy={6} r={6} fill="#2563EB" />
                  </svg>
                </div>
                <span className={`${style.line} ${style.blur}`}></span>
              </div>
              <span className={style.timelineLabel}>
                <span className={style.desktopTimelineText}>Booked</span>
                <span className={style.mobileTimelineText}>En route</span>
              </span>
              <span
                className={`${style.timelineTime} ${style.highlightedText}`}
              >
                Mon 9:02 AM
              </span>
            </div>
            <div className={style.timelineFrame}>
              <div className={style.timelineInnerFrame}>
                <span className={`${style.line} ${style.blur}`}></span>
                <div className={`${style.dot} ${style.blurDot}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx={4} cy={4} r={4} fill="#E3E8F0" />
                  </svg>
                </div>
                <span className={`${style.line} ${style.blur}`}></span>
              </div>
              <span className={`${style.timelineLabel} ${style.blurText}`}>
                <span className={style.desktopTimelineText}>In progress</span>
                <span className={style.mobileTimelineText}>Working</span>
              </span>
              <span className={style.timelineTime}>—</span>
            </div>
            <div className={style.timelineFrame}>
              <div className={style.timelineInnerFrame}>
                <span className={`${style.line} ${style.blur}`}></span>
                <div className={`${style.dot} ${style.blurDot}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx={4} cy={4} r={4} fill="#E3E8F0" />
                  </svg>
                </div>
                <span className={style.line}></span>
              </div>
              <span className={`${style.timelineLabel} ${style.blurText}`}>
                <span className={style.desktopTimelineText}>Complete</span>
                <span className={style.mobileTimelineText}>Done</span>
              </span>
              <span className={style.timelineTime}>—</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
