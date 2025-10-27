'use client'
import {useState} from 'react'
import styles from './FiltersSection.module.css'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material'

export default function FiltersSection({onFiltersChange}){
    const [filters, setFilters] = useState({
        typeVacancy: 'all',
        orderBy: 'data'
    })

    const typesVacancies = [
        { value: 'all', label: 'Todos' },
        { value: 'desenvolvimento', label: 'Desenvolvimento' },
        { value: 'design', label: 'Design' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'vendas', label: 'Vendas' }
    ]

    const sortingOptions = [
        { value: 'data', label: 'Data de Publicação' },
        { value: 'cargo', label: 'Ordem Alfabética' }
    ]

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleApplyFilters = () => {
        if (onFiltersChange) {
            onFiltersChange(filters)
        }
    }

    const handleClearFilters = () => {
        const clearedFilters = {
            typeVacancy: 'all',
            orderBy: 'data'
        }
        setFilters(clearedFilters)
        if (onFiltersChange) {
            onFiltersChange(clearedFilters)
        }
    }

    return (
        <div className={styles.filtersContainer}>
            <h2 className={styles.filtersTitle}>Filtrar Vagas</h2>
            <div className={styles.filtersGrid}>
                <div className={styles.filterGroup}>
                    <label htmlFor="typeVacancy" className={styles.filterLabel}>Tipo de Vaga</label>
                    <FormControl fullWidth>
                        <Select
                            labelId="type-vacancy-label"
                            id="typeVacancy"
                            value={filters.typeVacancy}
                            onChange={(e) => handleFilterChange('typeVacancy', e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#e1e5e9',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--primary-color)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--primary-color)',
                                }
                            }}
                        >
                            {typesVacancies.map(tipo => (
                                <MenuItem key={tipo.value} value={tipo.value}>
                                    {tipo.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.filterGroup}>
                    <label htmlFor="ordenarPor" className={styles.filterLabel}>Ordenar por</label>
                    <FormControl fullWidth>
                        <Select
                            labelId="order-by-label"
                            id="orderBy"
                            value={filters.orderBy}
                            onChange={(e) => handleFilterChange('orderBy', e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#e1e5e9',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--primary-color)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--primary-color)',
                                }
                            }}
                        >
                            {sortingOptions.map(opcao => (
                                <MenuItem key={opcao.value} value={opcao.value}>
                                    {opcao.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className={styles.filterActions}>
                <Button
                    className={`${styles.filterButtons} ${styles.clearFilters}`}
                    variant="outlined"
                    onClick={handleClearFilters}
                    sx={{
                        color: 'var(--primary-color)',
                        borderColor: 'var(--primary-color)',
                        width:'160px',
                        transition:'all .5s ease',
                        '&:hover': {
                            transform:'translateY(-3px)',
                        },
                        '@media (max-width: 390px)': { 
                            width: '80%'
                        }
                    }}
                >
                    Limpar Filtros
                </Button>
                <Button
                    className={`${styles.filterButtons} ${styles.applyFilters}`} 
                    variant="contained"
                    onClick={handleApplyFilters}
                    sx={{
                        backgroundColor: 'var(--primary-color)',
                        width:'160px',
                        transition:'all .5s ease',
                        '&:hover': {
                            transform:'translateY(-3px)',
                        },
                        '@media (max-width: 390px)': { 
                            width: '80%'
                        }
                    }}
                >
                    Aplicar Filtros
                </Button>
            </div>
        </div>
    )

}