'use client'
import useIsMobile from '../utils/Responsive/useIsMobile'
import styles from './Carousel.module.css'
import Image from "next/image";

export default function Carousel() {
  const isMobile = useIsMobile()

  return (
    <section className={styles.contentImages}>
      <div className={styles.dimensionImage}>
        {!isMobile ? (
          <img src="/image/banner.png" alt="Banner do site" className={styles.bannerImage} />
        ) : (
          <img src="/image/bmcod.png" alt="Banner do site" className={styles.bannerImage} />
        )}
      </div>
    </section>
  )
}
