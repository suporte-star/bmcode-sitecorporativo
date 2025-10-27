'use client'
import styles from  './SideMenu.module.css'

import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from "next/navigation";

export default function SideMenu({isOpen, onClose}) {
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { label: 'Início', href: '/' },
        { label: 'Sobre', targetId: 'about' },
        { label: 'Serviços', targetId: 'services' },
        { label: 'Números', targetId: 'numbers' },
        { label: 'Contato', href: '/contact' },
        { label: 'Mensagem', href: 'https://wa.me/5585920048167'},
    ]
    const handleLinkClick = (href) => {
        onClose()

        setTimeout(() => {
            
            if (href === '/' || href === '/contact') {
                window.location.href = href
            } 
            
            else if (item.targetId) {
                if (pathname === '/') {
                    const el = document.getElementById(item.targetId)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                
                } else {
                    sessionStorage.setItem('scrollTarget', item.targetId)
                    router.push('/')
                }
            }
            }, 300)
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    <motion.aside
                        className={styles.sideMenu}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >

                        <div className={styles.menuHeader}>
                            <h2 className={styles.menuTitle}>Menu</h2>
                            <button 
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Fechar menu"
                            >
                                <IoClose />
                            </button>
                        </div>
                        
                        <nav className={styles.menuNav}>
                            <ul className={styles.menuList}>
                                {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    className={styles.menuItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        className={styles.menuLink}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleLinkClick(item.href)
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    )
}