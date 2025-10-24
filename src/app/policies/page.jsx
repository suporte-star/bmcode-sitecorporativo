import React from 'react'
import styles from './Policies.module.css'
import Description from './Description/Description'
import ImageIlustrative from './ImageIlustrative/ImageIlustrative'

export default function Policies() {
  return (
    <main className={styles.contentPolicie}>
      <ImageIlustrative />
      <Description />
    </main>
  )
}
