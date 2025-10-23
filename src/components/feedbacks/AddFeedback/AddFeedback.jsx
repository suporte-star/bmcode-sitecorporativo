'use client'
import {useState} from 'react'
import styles from './AddFeedback.module.css'
import FormFeedback from './FormFeedback/FormFeedback'
import {sendFeedback} from '@/backend/feedbackService'

export default function AddFeedback() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData) => {
        setIsSubmitting(true)

        try {
            const result = await sendFeedback(formData)

            if(result.success) {
                alert('Feedback enviado com sucesso! Obrigado')
                setIsOpen(false)
                window.location.reload()
            }else{
                throw new Error('Erro ao enviar feedback')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao enviar feedback. Tente novamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.addFeedback}>
            <button className={styles.openBtn} onClick={()=> setIsOpen(true)}>
                Deixar Feedback

            </button>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <FormFeedback 
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
