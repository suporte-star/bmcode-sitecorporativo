'use client'
import styles from "./NavgationHeader.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", targetId: "aboutus" },
    { name: "Números", targetId: "numbers" },
    { name: "Clientes", targetId: "customer" },
  ];

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault(); 


    if (pathname === "/") {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } 

    else {
      sessionStorage.setItem("scrollTarget", targetId);
      router.push("/");
    }
  };

   return (
    <nav className={styles.contentNavigation}>
      <ul className={styles.listNavigation}>
        {navigationLinks.map((link) => (
          <li key={link.name} className={styles.item}>
            {link.targetId ? (
              <a
                href="/"
                onClick={(e) => handleAnchorClick(e, link.targetId)}
                className={styles.link}
              >
                {link.name}
              </a>
            ) : (
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
