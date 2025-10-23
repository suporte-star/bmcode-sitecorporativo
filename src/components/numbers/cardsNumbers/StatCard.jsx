'use client'
import {useState, useEffect} from 'react'
import styles from './CardsNumbers.module.css'
import {motion} from 'framer-motion'

export default function StatCard({icon, target, label, suffix = '', delay = 0, startCounting = false}) {
    const [count, setCount]  = useState(0)
    

    useEffect(()=>{
        if (!startCounting) return
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0 

        const timer = setTimeout(()=>{
            const interval = setInterval(()=>{
                current += increment
                if (current >= target){
                    setCount(target)
                    clearInterval(interval)
                }else {
                    setCount(Math.floor(current))
                }
            }, 16)
            return()=> clearInterval(interval)
        }, delay)
        return() => clearTimeout(timer)
    }, [startCounting, target, delay])

    return (
        <div className={styles.card}>
            <motion.div 
                className={styles.cardTopBar}
                transition={{ duration: 0.3 }}
            />
            
            <motion.div 
                className={styles.icon}
            >
                {icon}
            </motion.div>
            
            <div className={styles.number}>
                <span className={styles.plus}>+</span>
                {count}{suffix}
            </div>
            
            <div className={styles.label}>
                {label}
            </div>
        </div>
    )
}
