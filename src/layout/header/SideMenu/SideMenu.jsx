'use client'
import styles from  './SideMenu.module.css'

import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'
export default function SideMenu({isOpen, onClose}) {
    const menuItems = [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Números', href: '#numbers' },
        { label: 'Contato', href: '/contact' },
        { label: 'Suporte', href: '#Suporte' },
    ]
    const handleLinkClick = (href) => {
        onClose()
        setTimeout(() => {
        if (href === '/') {
            window.location.href = '/'
        } else if (href === '/contact') {
            window.location.href = '/contact'
        } else if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
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
                                <a
                                href={item.href}
                                className={styles.menuLink}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleLinkClick(item.href)
                                }}
                                >
                                {item.label}
                                </a>
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