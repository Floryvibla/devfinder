import React from 'react'
import styles from './styles.module.css'
import { Search } from 'lucide-react'

export function SearchUserInput() {
  return (
    <div className={styles.container}>
      <Search className={styles.iconSearch} size={30}/>
      <input/>
      <button>Adicionar</button>
    </div>
  )
}
