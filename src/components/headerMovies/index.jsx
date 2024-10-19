import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { BsGlobeAmericas } from 'react-icons/bs';

export default function HeaderMovies() {

    return (
        <div className={styles.headerMovies}>
            <div className={styles.headerMoviesTitle}>
                <BsGlobeAmericas size='40px' />
                <h1>Stop Motion World</h1>
            </div>
            <Link to={`/`} className={styles.headerMoviesLink}>
                Voltar
            </Link>
        </div >
    )
}