import styles from './ButtonHeader.module.css'
import Link from 'next/link'

export default function ButtonHeader() {
  const btnHeader = [
    { nome: 'Contato', href: '/contact' },
    { nome: 'Suporte', href: '#' },
  ];

  return (
    <section className={styles.ContentBtn}>
      {btnHeader.map((btn, index) => (
        <Link key={index} href={btn.href} className={styles.btnHeader}>{btn.nome}</Link>
      ))}
    </section>
  )
}
