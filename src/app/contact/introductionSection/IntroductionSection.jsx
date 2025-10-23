'use client'
import styles from './IntroductionSection.module.css'
import Title from '@/components/utils/Title/Title'
import {motion} from 'framer-motion'

export default function IntroductionSection() {
  return (
    <motion.section
      className={styles.IntroductionContact}
      initial={{ opacity: 0,  y: 50}}
      whileInView={{ opacity: 1,  y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 0.5}}
    >
        <div className={styles.titleWrapper}>
            <Title title='Entre em Contato com nossa Equipe' className={styles.titleSection}/>
        </div>
        <div className={styles.descriptionWrapper}>
            <p>A BMcode disponibiliza diversos canais de comunicação. Nesta página, você pode entrar em contato conosco e acessar nossa rede de atendimento direto. É possível enviar uma mensagem por meio do formulário de e-mail, que será encaminhado diretamente à nossa equipe, ou enviar uma proposta em formato PDF. Nossa equipe de gestão analisará o material e retornará o contato com sua empresa.</p>
        </div>
    </motion.section>
  )
}
