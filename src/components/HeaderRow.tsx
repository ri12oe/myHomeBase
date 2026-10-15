import styles from './HeaderRow.module.scss'

type HeaderRowProps = {
  labelNumber: string
  labelText: string
  title: string
  description: string
}

export default function HeaderRow({
  labelNumber,
  labelText,
  title,
  description,
}: HeaderRowProps) {
  return (
    <div className={styles.headerRow}>
      <div className={styles.title}>
        <label>
          <span className={styles.labelNumber}>{labelNumber}</span>
          <span className={styles.labelText}>{labelText}</span>
        </label>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <span className={styles.headerSub}>{description}</span>
    </div>
  )
}
