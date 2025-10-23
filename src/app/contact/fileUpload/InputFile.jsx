'use client'
import styles from './FileUpload.module.css'
import { useState, useRef } from 'react'
import { LuUpload } from "react-icons/lu";
import { FiX } from "react-icons/fi"
import {motion} from 'framer-motion'

export default function InputFile({onFileUpload, currentFile, onFileChange, onRemoveFile}) {
    const [file, setFile] = useState(null)
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile && selectedFile.type === 'application/pdf' && selectedFile.size <= 10 * 1024 * 1024) {
            setFile(selectedFile)
        } else if (selectedFile  &&   selectedFile.type !== 'applicatioin/pdf'){
            alert('Por favor, use apenas arquivos PDF')
        } else if (selectedFile && selectedFile.size > 10 * 1024 * 1024){
            alert('o arquivo deve ter no máximo 10MB')
        }
    }

    const handleDragOver = (e) =>{
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)

        const droppedFile = e.dataTransfer.files?.[0]
        if (droppedFile && droppedFile.type === 'application/pdf' && droppedFile.size <= 10 * 1024 * 1024) {
            setFile(droppedFile)
        } else if (droppedFile && droppedFile.type !== 'application/pdf') {
            alert('Por favor, selecione apenas arquivos PDF')
        } else if (droppedFile && droppedFile.size > 10 * 1024 * 1024) {
            alert('O arquivo deve ter no máximo 10MB')
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveFile = () => {
        setFile(null)
        if (fileInputRef.current){
            fileInputRef.current.value = ''
        }
    }

    return (
        <motion.div 
            className={styles.inputFileContainer}
            initial={{ opacity: 0,  y: 50}}
            whileInView={{ opacity: 1,  y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5}}
        >
            <label className={styles.label}>Arquivo PDF</label>
            <div
                className={`${styles.dropZone} ${isDragging ? styles.dragging : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf"
                    className={styles.hiddenInput}
                />
            
                {!file ? (
                <>
                    <LuUpload className={styles.uploadIcon} />
                    <p className={styles.mainText}>Clique para selecionar ou arraste o arquivo</p>
                    <p className={styles.subText}>Apenas arquivos PDF (máx. 10MB)</p>
                </>
                ) : (
                <div className={styles.fileInfo}>
                    <div className={styles.fileName}>
                    <span>📄 {file.name}</span>
                    <button 
                        onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveFile()
                        }}
                        className={styles.removeBtn}
                        type="button"
                    >
                        <FiX />
                    </button>
                    </div>
                    <p className={styles.fileSize}>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                </div>
                )}
            </div>

            <button 
                className={styles.submitBtn}
                disabled={!file}
                type="button"
            >
                <LuUpload className={styles.btnIcon} />
                Enviar Arquivo
            </button>
        </motion.div>
    )
}
