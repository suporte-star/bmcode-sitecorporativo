'use client'
import { motion } from 'framer-motion'

export default function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  yOffset = 50 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}