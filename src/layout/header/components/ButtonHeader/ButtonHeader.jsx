import styles from './ButtonHeader.module.css'
import Link from 'next/link'

export default function ButtonHeader() {
  const btnHeader = [
    { nome: 'Contato', href: '/contact' },
    { nome: 'Mensagem', href: 'https://wa.me/5585920048167' },
  ];

  return (
    <section className={styles.ContentBtn}>
      {btnHeader.map((btn, index) => (
        <Link
          key={index}
          href={btn.href}
          className={styles.btnHeader}
          target={btn.nome === 'Suporte' ? '_blank' : '_self'} 
          rel={btn.nome === 'Mensagem' ? 'noopener noreferrer' : undefined}
        >
          {btn.nome}
        </Link>
      ))}
    </section>
  )
}
