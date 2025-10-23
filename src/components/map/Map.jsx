import styles from './Map.module.css'
import Title from '../utils/Title/Title'
import { MdOutlineMail } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Map() {
  return (
    <section className={styles.Map}>
      <Title title='Onde nos Encontrar' className={styles.titleSection}/>
      <div className={styles.divisionContent}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31837.84367654281!2d-38.5419787!3d-3.778765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748e6a85a0aeb%3A0x78d65db1e6fa2d08!2sAv.%20Dr.%20Silas%20Munguba%2C%203500%20-%20Serrinha%2C%20Fortaleza%20-%20CE%2C%2060714-502!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe>
        </div>

        <div className={styles.infoMap}>
          <h4 className={styles.subtitleInform}>Ao lado, você pode conferir nossa unidade física, localizada em Fortaleza-CE. Esse espaço foi projetado para receber clientes e colaboradores em reuniões, treinamentos e atendimentos presenciais, promovendo uma experiência mais próxima, colaborativa e personalizada.</h4>

          <p className={styles.descritionInform}><MdCorporateFare />
            Av. Dr. Silas Munguba, 3500 Fortaleza – CE</p>

          <p className={styles.descritionInform}> <MdOutlineMail /> suporte@bmcode.com.br</p>

          <p className={styles.descritionInform}><FaPhone />(085) 92004-8167</p>
        </div>
      </div>
    </section>
  )
}
