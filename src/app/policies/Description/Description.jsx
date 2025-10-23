import React from 'react'
import styles from './Description.module.css'

export default function Description() {
  return (
    <section className={styles.contentDescription}>
      <p className={styles.paragfDescription}>Proteção de Dados</p>
      <h1 className={styles.titleDescrition}>Diretrizes de Privacidade e Proteção de Informações</h1>
      <section className={styles.Description}>
        <h1 className={styles.titlePolicie}>Politica de Privacidade</h1>
        <div className={styles.boxDescription}>
          <p className={styles.Description}>Política de Privacidade e Tratamento de Dados Pessoais --
            Esta Política de Privacidade e Proteção de Dados Pessoais ("Política") visa estabelecer as diretrizes e os princípios que norteiam o tratamento de dados pessoais realizado pela BMCODE, empresa de tecnologia e desenvolvimento, inscrita no CNPJ sob o nº 42.091.722/0001-49. Atuamos em estrita conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais ("LGPD") e a legislação aplicável.</p>
          <p className={styles.Description}>A BMCODE reitera seu compromisso inabalável com a privacidade e segurança dos dados de seus usuários, clientes, fornecedores e colaboradores, pautando todas as operações de tratamento de dados pela transparência e responsabilidade. Priorizamos a segurança e o sigilo de suas informações em todos os processos, inclusive durante a navegação e envio de dados neste site.</p>
          <p className={styles.Description}>
            Tratamento e Compartilhamento de Dados
            Os dados informados (como nome, endereço, CPF, CNPJ, mensagem e documentação via PDF´s) são coletados com a finalidade exclusiva de viabilizar o processo de negociação e nunca serão comercializados ou trocados.
          </p>
          <p className={styles.Description}> Reiteramos que o compartilhamento de dados tem como único propósito possibilitar o contato direto com nossa equipe. Seus dados pessoais são essenciais para assegurar que sua solicitação seja encaminhada de forma segura e eficiente.</p>
        </div>
      </section>
    </section>
  )
}