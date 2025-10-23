'use client'
import styles from "./header.module.css";
import { useState } from 'react'
//Importação dos componentes do Header
import TitleHeader from "./components/TitleHeader/TitleHeader";
import NavgationHeader from "./components/NavgationHeader/NavgationHeader";
import ButtonHeader from "./components/ButtonHeader/ButtonHeader";

import useIsMobile from '@/components/utils/Responsive/useIsMobile'
import SideMenu from './SideMenu/SideMenu'
import { IoMenuOutline } from "react-icons/io5"

export default function Header() {
    const isMobile = useIsMobile(768)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={styles.Header} id="initial">
            {!isMobile ? (
                <section className={styles.ContentHeader}>
                    <TitleHeader />
                    <NavgationHeader />
                    <ButtonHeader />
                </section>
            ) : (
                <section className={styles.ContentHeader}>
                    <TitleHeader />
                    <button 
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <IoMenuOutline className={styles.btnIcon}/>
                    </button>
                    <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </section>
                
            )
            }
        
        </header>
    );
}