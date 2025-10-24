import styles from './Work.module.css'
import Title from '@/components/utils/Title/Title'
import FiltersSection from './filtersSection/FiltersSection'
import JobsTable from './jobsTable/JobsTable'
import JobsClient from './JobsClient'

// Esta função simula dados do banco
async function getJobs() {
  return [
    {
      id: 1,
      cargo: 'Desenvolvedor Sankhya',
      publicadaEm: '2024-01-15',
      nivel: 'Pleno',
      tipoContrato: 'CLT',
      localizacao: 'Remoto',
      emailDestino: 'suporte@bmcode.com.br',
      tipoVaga: 'desenvolvimento' 
    },
    {
      id: 2,
      cargo: 'Analista de Sistemas',
      publicadaEm: '2024-01-10',
      nivel: 'Sênior',
      tipoContrato: 'PJ',
      localizacao: 'Híbrido - SP',
      emailDestino: 'suporte@bmcode.com.br',
      tipoVaga: 'desenvolvimento' 
    },
    {
      id: 3,
      cargo: 'Designer UX/UI',
      publicadaEm: '2024-01-12',
      nivel: 'Júnior',
      tipoContrato: 'CLT',
      localizacao: 'Presencial - RJ',
      emailDestino: 'suporte@bmcode.com.br',
      tipoVaga: 'design' 
    },
    {
      id: 4,
      cargo: 'Especialista em Marketing',
      publicadaEm: '2024-01-08',
      nivel: 'Pleno',
      tipoContrato: 'PJ',
      localizacao: 'Remoto',
      emailDestino: 'suporte@bmcode.com.br',
      tipoVaga: 'marketing' 
    }
  ]
}

export default async function Work() {
    const jobs = await getJobs()
    
    return (
        <main className={styles.workPage}>
            <Title title='Trabalhe Conosco' className={styles.titleWork}/>
             <JobsClient initialJobs={jobs} />
        </main>
    )
}
