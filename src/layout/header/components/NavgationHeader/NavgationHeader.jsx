import styles from "./NavgationHeader.module.css";
import Link from "next/link";

export default function NavigationHeader() {
  const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#aboutus" },
    { name: "Números", href: "#numbers" },
    { name: "Clientes", href: "#customer" },
  ];

  return (
    <nav className={styles.contentNavigation}>
      <ul className={styles.listNavigation}>
        {navigationLinks.map((link) => (
          <li key={link.name} className={styles.item}>
            <Link href={link.href} className={styles.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
