'use client'
import styles from './JobsTable.module.css'
import ApplyBtn from '../applyBtn/ApplyBtn'

export default function JobsTable({jobs}) {
    const formatDate = (dataString) => {
        return new Date(dataString).toLocaleDateString('pt-BR')
    }

    if (!jobs || jobs.length === 0) {
        return (
        <div className={styles.noJobs}>
            <p>Nenhuma vaga disponível no momento.</p>
        </div>
        )
    }

    return (
        <div className={styles.tableCotainer}>
            <div className={styles.tableHeader}>
                <h2 className={styles.tableTitle}>Vagas Disponíveis</h2>
                <span className={styles.jobsCount}>{jobs.length} vaga(s) encontrada(s)</span>
            </div>
            <table className={styles.jobsTable}>
                <thead>
                    <tr>
                        <th className={styles.th}>Cargo</th>
                        <th className={styles.th}>Publicada em</th>
                        <th className={styles.th}>Nível</th>
                        <th className={styles.th}>Tipo de Contrato</th>
                        <th className={styles.th}>Localização</th>
                        <th className={styles.th}></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id} className={styles.tr}>
                            <td className={styles.td}>
                                <span className={styles.jobTitle}>{job.cargo}</span>
                            </td>
                            <td className={styles.td}>
                                {formatDate(job.publicadaEm)}
                            </td>
                            <td className={styles.td}>
                                <span className={`${styles.badge} ${styles[job.nivel.toLowerCase()]}`}>
                                    {job.nivel}
                                </span>
                            </td>
                            <td className={styles.td}>
                                {job.tipoContrato}
                            </td>
                            <td className={styles.td}>
                                {job.localizacao}
                            </td>
                            <td className={styles.td}>
                                <ApplyBtn job={job} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
