import React from 'react'
import styles from './Policies.module.css'
import Description from './Description/Description'
import ImageIlustrative from './ImageIlustrative/ImageIlustrative'

export default function Policies() {
  return (
    <section className={styles.contentPolicie}>
      <ImageIlustrative />
      <Description />
    </section>
  )
}
