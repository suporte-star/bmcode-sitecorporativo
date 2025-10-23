'use client'
import styles from './FileUpload.module.css'
import Title from '@/components/utils/Title/Title'
import InputFile from './InputFile'
import {motion} from 'framer-motion'

export default function FileUpload() {
  return (
    <motion.section 
        className={styles.fileUploadSection}
        initial={{ opacity: 0,  y: 50}}
        whileInView={{ opacity: 1,  y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
    >
        <Title title='Envie sua Proposta por PDF'/>
        <p>Envie seu arquivo PDF arrastando ou clicando na área abaixo</p>
        <InputFile/>
    </motion.section>
  )
}
