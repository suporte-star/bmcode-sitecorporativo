"use client"
import React from 'react'
import styles from './ImageIlustrative.module.css'
import useIsMobile from '@/components/utils/Responsive/useIsMobile'
import Image from "next/image";

export default function ImageIlustrative() {
  const isMobile = useIsMobile()
  
  return (
    <section className={styles.contentImage}>
      <div className={styles.dimensionImage}>
        {!isMobile ? (
          <Image 
            src="/image/sec.png" 
            alt="Banner do site" 
            className={styles.bannerImage}
            width={1480}
            height={600}
            priority
          />
        ) : (
          <Image 
            src="/image/segurancaM.png" 
            alt="Banner do site" 
            className={styles.bannerImage}
            width={800}
            height={400}
            priority
          />
        )}
      </div>
    </section>
  )
}