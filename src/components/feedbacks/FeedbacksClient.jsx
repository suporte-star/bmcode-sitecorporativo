'use client'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import styles from './Feedbacks.module.css'
import {motion} from 'framer-motion'
import useIsMobile from '../utils/Responsive/useIsMobile'

export default function FeedbacksClient({feedbacks}) {
    const isMobile = useIsMobile()

    return(
        <motion.div
            className={styles.feedbackSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease:"easeInOut"}}
        >
            <div className={styles.customPrev}>
                <FaChevronLeft />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: `.${styles.customNext}`,
                    prevEl: `.${styles.customPrev}`,
                }}
                pagination={!isMobile ? { clickable: true } : false}
                autoplay={{ delay: 600000 }}
                loop
                className={styles.swiper}
                style={{
                    '--swiper-navigation-color': 'var(--primary-color)',
                    '--swiper-pagination-color': 'var(--primary-color)',
                    
                    
                }}
            >
                {feedbacks.map((f, index) => (
                <SwiperSlide key={index} className={styles.slide}
                
                
                >
                    <div className={styles.card}>
                       {!isMobile && (
                            <FaQuoteLeft className={styles.quoteLeft} />
                       )} 

                        <div className={styles.headerCard}>
                            <div className={styles.avatar}>{f.name.charAt(0)}</div>
                            <div className={styles.info}>
                            <h3>{f.name}</h3>
                            <p>{f.company}</p>
                            </div>
                        </div>

                        <div className={styles.stars}>
                            {Array.from({ length: f.rating }).map((_, i) => (
                            <FaStar key={i} className={styles.star} />
                            ))}
                        </div>

                        <p className={styles.comment}>{f.comment}</p>
                        {!isMobile && (
                             <FaQuoteRight className={styles.quoteRight} />
                        )}
                       
                    </div>
                </SwiperSlide>
                ))}
                
                
            </Swiper>
            <div className={styles.customNext}>
                <FaChevronRight />
            </div>
        </motion.div>
    )
}