import SearchBar from '../searchBar'
import styles from './styles.module.css'
import { BsGlobeAmericas } from "react-icons/bs";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerBox} >
                    <div className={styles.headerTitle}>
                        <BsGlobeAmericas size='40px' />
                        <h1>Stop Motion World</h1>
                    </div>

                    <SearchBar />
                </div>
            </div>
        </header>
    )
}