import styles from './TitleHeader.module.css'

export default function TitleHeader() {
  return (
   <section className={styles.titleHeader}>
    <h1 className={styles.title}>BM<span className={styles.colorAlternative}>code</span></h1>
   </section>
  )
}
