import styles from './Numbers.module.css'
import CardsNumbers from './cardsNumbers/CardsNumbers'
import Title from '../utils/Title/Title'

export default function Numbers() {
  return (
    <section className={styles.numberSection} id='numbers'>
        <div className={styles.container}>
           <Title title='Nossos Números' className={styles.titleSection}/>
            <CardsNumbers/>
        </div>
    </section>
  )
}
