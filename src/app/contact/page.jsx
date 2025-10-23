import styles from  './Contact.module.css'

import FileUpload  from './fileUpload/FileUpload'
import IntroductionSection from './introductionSection/IntroductionSection'
import FormContact from './formContact/FormContact'


export default function Contact() {
  return (
    <main className={styles.contactPage}>
        <IntroductionSection/>
        <FormContact/>
        <FileUpload/>
    </main>
  )
}
