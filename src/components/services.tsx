import { useState } from 'react'
import { AnimatePresence, m, type Variants } from 'motion/react'
import style from './services.module.scss'
import {
  EASE_OUT,
  revealOnScroll,
  riseVariants,
  staggerVariants,
} from './motionPresets'
import HeaderRow from './HeaderRow'
import ArrowRightIcon from './ArrowRightIcon'
import SparklesIcon from './SparklesIcon'
import GridIcon from './GridIcon'
import BranchIcon from './BranchIcon'
import CloudUploadIcon from './CloudUpLoadIcon'
import {
  Faucet,
  Leaf,
  PlugZap,
  Refrigerator,
  Shovel,
  Sofa,
  Truck,
  Wrench,
} from 'lucide-react'

const serviceGroups = [
  {
    name: 'Cleaning',
    description:
      'Priced upfront from your home size and the details you give us.',
    services: [
      {
        name: 'House cleaning',
        description: 'Standard, deep or move-out',
        icon: SparklesIcon,
      },
      {
        name: 'Window cleaning',
        description: 'Inside, outside or both',
        icon: GridIcon,
      },
      {
        name: 'Pressure washing',
        description: 'Driveways, decks and siding',
        icon: BranchIcon,
      },
      {
        name: 'Gutter cleaning',
        description: 'Clear-out and downspout check',
        icon: CloudUploadIcon,
      },
    ],
    details: ['Home sizes', 'Rooms', 'Pets', 'Preferred day'],
  },
  {
    name: 'Outdoor',
    description:
      'Keep your outdoor spaces tidy with clear service details before booking.',
    services: [
      {
        name: 'Lawn mowing',
        description: 'Routine mowing and edge trimming',
        icon: Leaf,
      },
      {
        name: 'Yard cleanup',
        description: 'Seasonal debris and leaf removal',
        icon: Shovel,
      },
    ],
    details: [
      'Yard size',
      'Service frequency',
      'Cleanup needs',
      'Preferred day',
    ],
  },
  {
    name: 'Repairs & moving',
    description: 'Get help with small home projects and local moving jobs.',
    services: [
      {
        name: 'Handyman repairs',
        description: 'Small repairs and installations',
        icon: Wrench,
      },
      {
        name: 'Furniture assembly',
        description: 'Assembly for home furniture',
        icon: Sofa,
      },
      {
        name: 'Appliance installation',
        description: 'Fitting and setup for appliances',
        icon: Refrigerator,
      },
      {
        name: 'Local moving',
        description: 'Loading, transport and unloading',
        icon: Truck,
      },
    ],
    details: ['Job details', 'Photos', 'Pickup location', 'Preferred day'],
  },
  {
    name: 'Plumbing & electrical',
    description:
      'Describe the issue and compare available local pros and upfront prices.',
    services: [
      {
        name: 'Plumbing repairs',
        description: 'Leaks, faucets and fixtures',
        icon: Faucet,
      },
      {
        name: 'Electrical repairs',
        description: 'Outlets, switches and lighting',
        icon: PlugZap,
      },
    ],
    details: ['Issue details', 'Photos', 'Access notes', 'Preferred day'],
  },
]

// Switching category: old content slides out quickly, then the new one
// slides in with its services one after another.
const swapVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15, ease: 'easeIn' } },
}

const serviceRowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
}

export default function Services() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const selectedGroup = serviceGroups[selectedGroupIndex]

  return (
    <main id="services" className={style.servicesMain}>
      <HeaderRow
        labelNumber="(05)"
        labelText="Services"
        title="One app for the whole house."
        description="Launching with the services homeowners book most — and adding more every month."
      />
      <m.div
        className={style.serviceIndex}
        variants={staggerVariants(0.1)}
        {...revealOnScroll}
      >
        <m.div className={style.categories} variants={staggerVariants(0.06)}>
          {serviceGroups.map((group, index) => {
            const isSelected = index === selectedGroupIndex

            return (
              <m.button
                key={group.name}
                type="button"
                className={`${style.category} ${isSelected ? style.selectedCategory : ''}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedGroupIndex(index)}
                variants={riseVariants}
              >
                <span
                  className={`${style.categoryLabel} ${isSelected ? style.highlight : ''}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`${style.categoryName} ${isSelected ? style.highlightText : ''}`}
                >
                  {group.name}
                </span>
                {isSelected ? (
                  // slides in each time a category becomes selected
                  <m.span
                    className={style.selectedArrow}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                  >
                    <ArrowRightIcon size={24} color="#2563EB" />
                  </m.span>
                ) : (
                  <span className={style.servicesNumber}>
                    {group.services.length} services
                  </span>
                )}
              </m.button>
            )
          })}
        </m.div>
        <m.div
          className={style.categoriesDetail}
          aria-live="polite"
          variants={riseVariants}
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={selectedGroup.name}
              className={style.detailSwap}
              variants={swapVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div className={style.detailFrameTop}>
                <div className={style.detailFrameInner}>
                  <span className={style.detailLabel}>
                    {selectedGroup.name}
                  </span>
                  <span className={style.detailDescription}>
                    {selectedGroup.description}
                  </span>
                </div>
                <span className={style.detailNumberContent}>
                  {selectedGroupIndex + 1} / {serviceGroups.length}
                </span>
              </div>
              <div className={style.detailFrameMiddle}>
                {selectedGroup.services.map((service) => {
                  const ServiceIcon = service.icon

                  return (
                    <m.div
                      className={style.detailFrameMiddleInner}
                      key={service.name}
                      variants={serviceRowVariants}
                    >
                      <div className={style.IconTile}>
                        <ServiceIcon
                          width={28}
                          height={28}
                          color="#0B1B33"
                          strokeWidth={2}
                        />
                      </div>
                      <div className={style.detailContent}>
                        <span className={style.detailContentLabel}>
                          {service.name}
                        </span>
                        <span className={style.detailContentDescription}>
                          {service.description}
                        </span>
                      </div>
                    </m.div>
                  )
                })}
              </div>
              <m.div
                className={style.detailFrameBottom}
                variants={serviceRowVariants}
              >
                <span className={style.detailFrameBottomLabel}>
                  You’ll tell us:
                </span>
                {selectedGroup.details.map((detail) => (
                  <div className={style.detailFramePill} key={detail}>
                    <span className={style.detailFramePillLabel}>{detail}</span>
                  </div>
                ))}
              </m.div>
            </m.div>
          </AnimatePresence>
        </m.div>
      </m.div>
      <a href="#" className={style.moreLink}>
        <span className={style.moreLinkLabel}>
          Don’t see yours? Tell us when you sign up
        </span>
        <ArrowRightIcon size={16} color="#2563EB" />
      </a>
    </main>
  )
}
