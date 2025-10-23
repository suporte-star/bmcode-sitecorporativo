'use client'
import { useState } from 'react'
import styles from './FormContact.module.css'
import Title from '@/components/utils/Title/Title'
import { IoSend } from 'react-icons/io5'
import {motion} from 'framer-motion'
import {sendEmail} from '@/backend/sendEmail'

export default function FormContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const success = await sendEmail(formData)

        if (success) {
            alert('Mensagem enviada com sucesso!')
            setFormData({ name: '', email: '', message: '' })
        } else {
            alert('Falha ao enviar a mensagem. Tente novamente mais tarde.')
        }
        
        setIsSubmitting(false)
    }

  return (
    <motion.section 
        className={styles.formContact}
        initial={{ opacity: 0,  y: 50}}
        whileInView={{ opacity: 1,  y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
    >
        <div className={styles.container}>
            <div className={styles.textContent}>
                <Title className={styles.titleSection} title='Contato Via E-Mail'/>
                <p className={styles.description}>Entre em contato com nossa equipe utilizando seu e-mail corporativo. Informe o nome da sua empresa, seu endereço de e-mail e os detalhes da proposta ou negociação que deseja estabelecer com a BMcode. Nossa equipe retornará o contato no menor prazo possível.</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows="6"
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            <IoSend className={styles.sendIcon} />
          </button>
        </form>
      </div>
    </motion.section>
  )
}