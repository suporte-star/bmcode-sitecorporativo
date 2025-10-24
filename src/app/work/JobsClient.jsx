'use client'
import { useState, useMemo } from 'react'
import styles from './Work.module.css'
import FiltersSection from './filtersSection/FiltersSection'
import JobsTable from './jobsTable/JobsTable'

export default function JobsClient({ initialJobs }) {
    const [filters, setFilters] = useState({
        typeVacancy: '',
        orderBy: 'data'
    })
    const filteredAndSortedJobs = useMemo(() => {
        let filteredJobs = [...initialJobs]

        if (filters.typeVacancy && filters.typeVacancy !== 'all') {
            filteredJobs = filteredJobs.filter(job => 
                job.tipoVaga === filters.typeVacancy
            )
        }

  
        filteredJobs.sort((a, b) => {
            if (filters.orderBy === 'data') {
                return new Date(b.publicadaEm) - new Date(a.publicadaEm) 
            } else if (filters.orderBy === 'cargo') {
                return a.cargo.localeCompare(b.cargo) 
            }
            return 0
        })

        return filteredJobs
    }, [filters, initialJobs])

    const handleFiltersChange = (newFilters) => {
        setFilters(newFilters)
    }

    return (
        <>
            <section className={styles.filtersSection}>
                <div className={styles.container}>
                    <FiltersSection onFiltersChange={handleFiltersChange} />
                </div>
            </section>
            <section className={styles.jobsSection}>
                <div className={styles.container}>
                    <JobsTable jobs={filteredAndSortedJobs} />
                </div>
            </section>
        </>
    )
}