import styles from './styles.module.css'

export default function SearchBar({ busca, setBusca, openFormulario }) {

    return (
        <form className={styles.searchBarForm}>
            <input
                className={styles.searchBarInput}
                type='text'
                onChange={(e) => setBusca(e.target.value)}
                value={busca}
                placeholder='Animação'
            />

            <button type='button' onClick={openFormulario}>
                Buscar
            </button>
        </form >

    )
}