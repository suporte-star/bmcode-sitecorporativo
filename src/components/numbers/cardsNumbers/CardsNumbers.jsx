'use client'
import { useState, useEffect, useRef} from 'react'
import { FaChartLine, FaHandshake, FaClock, FaTrophy } from 'react-icons/fa'
import StatCard from './StatCard'
import {motion} from 'framer-motion'
import styles from './CardsNumbers.module.css'

export default function CardsNumbers() {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)

    const stats = [
        { icon: '📊', target: 350, label: 'Projetos Concluídos', delay: 100},
        { icon: '🏆', target: 4, label: 'Anos no Mercado', delay: 400 },
        { icon: '🤝', target: 180, label: 'Clientes Satisfeitos', delay: 200},
        { icon: '⏱️', target: 15, label: 'Horas de Desenvolvimento', suffix: 'K', delay:300}
        
    ]

    const row1Stats = stats.slice(0, 2);
    const row2Stats = stats.slice(2, 4);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.2, // 20% do container visível para disparar
                rootMargin: '0px'
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [isVisible])
    return (
        <div className={`${styles.cardsNumbers}`} ref={containerRef}>
            {/* Linha 1 */}
        <motion.div 
                className={`${styles.cardsRow} ${styles.row1}`}
                initial={{ opacity: 0,  y: 50}}
                whileInView={{ opacity: 1,  y: 0}}
                viewport={{ once: true }}
                transition={{ duration: 0.5}}
            >
                {row1Stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        icon={stat.icon}
                        target={stat.target}
                        label={stat.label}
                        suffix={stat.suffix}
                        delay={stat.delay}
                        startCounting={isVisible}
                    />
                ))}
            </motion.div>
            
            {/* Linha 2 */}
            <motion.div 
                className={`${styles.cardsRow} ${styles.row2}`}
                initial={{ opacity: 0,  y: 50}}
                whileInView={{ opacity: 1,  y: 0}}
                viewport={{ once: true }}
                transition={{ duration: 0.5}}
            >
                {row2Stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        icon={stat.icon}
                        target={stat.target}
                        label={stat.label}
                        suffix={stat.suffix}
                        delay={stat.delay}
                        startCounting={isVisible}
                    />
                ))}
            </motion.div>

        </div>
    )
}
