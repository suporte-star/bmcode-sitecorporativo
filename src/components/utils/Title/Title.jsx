'use client'
import styles from './Title.module.css'

export default function Title({title, className}) {
  const classes = `${styles.title} ${className || ''}`;
  return (
    <h1 className={classes}>{title}</h1>
  )
}
