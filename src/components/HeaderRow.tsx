import { m } from 'motion/react'
import styles from './HeaderRow.module.scss'
import { revealOnScroll, riseVariants, staggerVariants } from './motionPresets'

type HeaderRowProps = {
  labelNumber: string
  labelText: string
  title: string
  description: string
  colorTheme?: 'default' | 'dark'
}

// Shared section header. Reveals on scroll: title block first, then the description.
export default function HeaderRow({
  labelNumber,
  labelText,
  title,
  description,
  colorTheme = 'default',
}: HeaderRowProps) {
  return (
    <m.div
      className={`${styles.headerRow} ${
        colorTheme === 'dark' ? styles.dark : ''
      }`}
      variants={staggerVariants(0.12)}
      {...revealOnScroll}
    >
      <m.div className={styles.title} variants={riseVariants}>
        <label>
          <span className={styles.labelNumber}>{labelNumber}</span>
          <span className={styles.labelText}>{labelText}</span>
        </label>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </m.div>
      <m.span className={styles.headerSub} variants={riseVariants}>
        {description}
      </m.span>
    </m.div>
  )
}
