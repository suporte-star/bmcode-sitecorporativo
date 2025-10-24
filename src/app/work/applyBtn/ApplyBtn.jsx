'use client'
import { useState } from 'react'
import styles from './ApplyBtn.module.css'

export default function ApplyBtn({ job }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleGmail = () => {
        const subject = `Candidatura - ${job.cargo}`
        const body = `Prezados,\n\nGostaria de me candidatar à vaga de ${job.cargo}.\n\n[Escreva sua mensagem aqui e coloque seu currículo]\n\nAtenciosamente,\n[Seu Nome]`
        

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(job.emailDestino)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    }

    const handleMailto = () => {
        const subject = `Candidatura - ${job.cargo}`
        const body = `Prezados,\n\nGostaria de me candidatar à vaga de ${job.cargo}.\n\n[Escreva sua mensagem aqui e coloque seu currículo]\n\nAtenciosamente,\n[Seu Nome]`
        const mailtoLink = `mailto:${job.emailDestino}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        window.location.href = mailtoLink
    }

    const handleClick = () => {

        const isGmailUser = window.navigator.userAgent.includes('Gmail') || 
                           document.referrer.includes('mail.google.com') ||
                           localStorage.getItem('preferredEmail') === 'gmail'
        
        if (isGmailUser) {
            handleGmail()
        } else {
           
            handleGmail()
        }
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.ApplyBtn}
            title={`Candidatar-se à vaga de ${job.cargo}`}
        >
            Candidatar-se
        </button>
    )
}