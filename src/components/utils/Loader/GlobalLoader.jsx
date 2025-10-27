'use client'
import {useState, useEffect} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import styles from './GlobalLoader.module.css'

export default function GlobalLoader({ children }) {
    const pathname = usePathname()
    const [loading, setLoading] = useState(true)
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        const handleInitialLoad = () => {
            setTimeout(() => setLoading(false), 600)
        }

        if (document.readyState === 'complete') {
        handleInitialLoad()
        } else {
        window.addEventListener('load', handleInitialLoad)
        return () => window.removeEventListener('load', handleInitialLoad)
        }
    }, [])

    useEffect(() => {
        setPageLoading(false)
    }, [pathname])

    useEffect(() => {
        const handleClick = (e) => {
            const link = e.target.closest('a[href]')
            if (link && link.origin === window.location.origin) {
                const href = link.getAttribute('href')
                if (href && href !== pathname) {
                    setPageLoading(true)
                }
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [pathname])

    const showLoader = loading || pageLoading

    return (
        <>
            {showLoader && (
                <div className={styles.overlay}>
                <div className={styles.spinner}></div>
                </div>
            )}
            {children}
        </>
    )
}