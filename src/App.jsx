import styles from './App.module.css'
import { SearchUserInput } from "./components/search-user"

function App() {

  return (
    <main className={styles.App}>
      <h1>Adicionar uma pessoa</h1>
      <SearchUserInput/>
    </main>
  )
}

export default App
