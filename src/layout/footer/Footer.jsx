import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaCode, FaHeart } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/feed/',
      icon: <FaLinkedin />,
      name: 'LinkedIn'
    },
    {
      href: 'https://www.instagram.com/bm.code/',
      icon: <FaInstagram />,
      name: 'Instagram'
    },
    {
      href: '#',
      icon: <BsFillThreadsFill />,
      name: 'Threads'
    },
  ];

  const quickLinks = [
    { href: '#initial', label: 'Inicio' },
    { href: '/contact', label: 'Contato' },
    { href: '#', label: 'Sobre' },
    { href: '/work', label: 'Trabalhe Conosco' },
    { href: '/policies', label: 'Política de Privacidade' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <FaCode className={styles.logoIcon} />
            <h1 className={styles.logoText}>
              Bm<span className={styles.colorAlternative}>code</span>
            </h1>
          </div>
          <p className={styles.description}>
            Há mais de 4 anos, somos uma empresa especializada em soluções
            tecnológicas e desenvolvimento de software de alta qualidade.
          </p>

          <div className={styles.socialNetworks}>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.name}
                target='_blank'
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.linksTitle}>Links Rápidos</h3>
          <ul className={styles.linksList}>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.linksTitle}>Contato</h3>
          <div className={styles.contactInfo}>
            <p>suporte@bmcode.com.br</p>
            <p>(085) 92004-8167</p>
            <p>Fortaleza - Ce</p>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p className={styles.copyright}>
            © {currentYear} Bmcode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}