'use client'
import { useState } from 'react'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './FormFeedback.module.css'

export default function FormFeedback({ onSubmit, onCancel, isSubmitting = false }) {
    const [formData, setFormData] = useState ({
        name: '',
        rating: 5,
        comment: '',
        company: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target

        if (name === 'comment' && value.length > 70) {
            return
        }

        setFormData(prev =>  ({
            ...prev,
            [name]: name === 'rating' ? parseInt(value) : value
        }))
    }

    const handleRatingChange = (event, newValue) => {
        setFormData(prev => ({
            ...prev,
            rating: newValue
        }))
    }

    const handleSubmit  = (e) => {
        e.preventDefault()

        if(!formData.name.trim() || !formData.comment.trim() || !formData.company.trim()) {
            alert('Por favor, preencha todos os campos')
            return
        }

        onSubmit(formData)
    }

    return (
        <div className={styles.formContainer}>
            <h2>Deixe sua Avaliação</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu Nome"
                        autoComplete='off'
                        disabled={isSubmitting}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Empresa</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Sua Empresa"
                        disabled={isSubmitting}
                    />
                </div>
                <div className={styles.formGroup}>
                    <Typography component="legend" className={styles.ratingLabel}>
                        Avaliação
                    </Typography>
                    <Box className={styles.ratingContainer}>
                        <Rating
                            name="rating"
                            value={formData.rating}
                            onChange={handleRatingChange}
                            size="large"
                            disabled={isSubmitting}
                        />
                        
                    </Box>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="comment">Comentário</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        placeholder="Conte sua experiência..."
                        disabled={isSubmitting}
                        maxLength={70}
                    >
                    
                    </textarea>
                    <span className={`${styles.charCount} ${formData.comment.length >= 70 ? styles.charCountMax : ''}`}>
                        {formData.comment.length}/70
                    </span>
                </div>

                <div className={styles.formActions}>
                    <button
                        type="button"
                        onClick={onCancel}
                        className={styles.cancelButton}
                        disabled={isSubmitting}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
                    </button>
                </div>
            </form>
        </div>
    )
}