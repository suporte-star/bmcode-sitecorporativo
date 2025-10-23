'use client'
import styles from "./NavgationHeader.module.css";
import Link from "next/link";

export default function NavigationHeader() {
  const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#aboutus" },
    { name: "Números", href: "#numbers" },
    { name: "Clientes", href: "#customer" },
  ];

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#') && window.location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${href}`;
    }

  };

  return (
    <nav className={styles.contentNavigation}>
      <ul className={styles.listNavigation}>
        {navigationLinks.map((link) => (
          <li key={link.name} className={styles.item}>
            {link.href.startsWith('#') ? (
              <Link 
                href={`/${link.href}`}
                className={styles.link}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.name}
              </Link>
            ) : (
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
