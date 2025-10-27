'use client'
import { useState, useEffect } from 'react'
import styles from './ApplyBtn.module.css'
import useIsTablet from '@/components/utils/Responsive/useIsTablet'

export default function ApplyBtn({ job }) {
    const [isHovered, setIsHovered] = useState(false)
    const [deviceType, setDeviceType] = useState(null) 

    const isTablet = useIsTablet()

    useEffect(() => {
        const getDeviceType = () => {
            if (isTablet) return 'mobile'

            const screenWidth = window.innerWidth
            if (screenWidth <= 1024) return 'mobile'

            const userAgent = navigator.userAgent.toLowerCase()
            const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
            return isMobile ? 'mobile' : 'desktop'
        }
        
        setDeviceType(getDeviceType())

    }, [isTablet]) 

    const handleMobileApp = () => {
        const subject = `Candidatura - ${job.cargo}`
        const body = `Prezados,\n\nGostaria de me candidatar à vaga de ${job.cargo}.\n\n[Escreva sua mensagem aqui e coloque seu currículo]\n\nAtenciosamente,\n[Seu Nome]`       
        const mailtoLink = `mailto:${job.emailDestino}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
    }

    const handleDesktopGmail = () => {
        const subject = `Candidatura - ${job.cargo}`
        const body = `Prezados,\n\nGostaria de me candidatar à vaga de ${job.cargo}.\n\n[Escreva sua mensagem aqui e coloque seu currículo]\n\nAtenciosamente,\n[Seu Nome]`
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(job.emailDestino)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    }


    const handleClick = () => {
        console.log(`Dispositivo detectado: ${deviceType}`)

        if (deviceType === 'mobile') {
            handleMobileApp()
        } else {
            handleDesktopGmail()
        }
    }

    const getTitleText = () => {
        if (deviceType === null) {
            return 'Carregando...'
        }
        return deviceType === 'mobile' ? 'App' : 'Gmail'
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.ApplyBtn}
            title={`Candidatar-se à vaga de ${job.cargo} (${getTitleText()})`} 
            disabled={deviceType === null}
        >
            Candidatar-se
        </button>
    )
}