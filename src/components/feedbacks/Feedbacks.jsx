'use client'
import { useState, useEffect } from 'react'
import styles from './Feedbacks.module.css'
import FeedbacksClient from './FeedbacksClient'
import Title from '../utils/Title/Title'
import { getFeedbacks } from '@/backend/feedbackService'
import AddFeedback from './AddFeedback/AddFeedback'

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFeedbacks() {
            try {
                const data = await getFeedbacks()
                setFeedbacks(data)
            } catch (error) {
                console.error('Erro ao carregar feedbacks:', error)
            } finally {
                setLoading(false)
            }
        }
        loadFeedbacks()
    }, [])

    if (loading) return <div>Carregando feedbacks...</div>

    return (
        <section className={styles.Feedbacks} id='customer'>
            <Title title='Avaliações de Clientes'/>
            {feedbacks.length > 0 ? (
                <FeedbacksClient feedbacks={feedbacks} />
            ) : (
                <p className={styles.noFeedback}>Nenhum feedback disponível ainda.</p>
            )}
            <AddFeedback/>
        </section>
    )
}