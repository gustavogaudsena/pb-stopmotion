import { useState } from 'react'
import styles from './styles.module.css'
import Card from '../card';
import { IoIosStar } from "react-icons/io";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import useTheme from '../../hooks/useTheme';


export default function MovieList({ filmes, setFilmes, busca }) {
    const [ordernacaoBy, setOrdenacaoBy] = useState('');
    const [ordenacaoAsc, setOrdenacaoAsc] = useState(false);
    const { theme } = useTheme()

    const selectedColor = theme === 'dark' ? 'var(--secondary)': 'var(--primary)';

    // Função de ordenação basica
    const handleOrdenacao = (event) => {
        const key = event.currentTarget.value;

        const validKey = filmes.every(filme => Object.keys(filme).includes(key))
        if (!validKey) return

        setOrdenacaoBy(key);
        setOrdenacaoAsc(!ordenacaoAsc)

        const filmesOrdenados = filmes.sort((a, b) => ordenacaoAsc ? b[key] - a[key] : a[key] - b[key])
        setFilmes(filmesOrdenados)
    }

    return (
        <div className={styles.movieList}>
            <div className={styles.movieListContainerControle}>
                <div className={styles.movieListOrdenacao}>
                    <button onClick={handleOrdenacao} value='popularity'>
                        <IoIosStar />
                        <span>Popularidade</span>
                        <span className={styles.movieListOrdenacaoArrows}>
                            <LuMoveDown
                                color={
                                    ordernacaoBy == 'popularity' && !ordenacaoAsc
                                        ? selectedColor
                                        : undefined
                                }
                            />
                            <LuMoveUp
                                color={
                                    ordernacaoBy == 'popularity' && ordenacaoAsc
                                        ? selectedColor
                                        : undefined
                                } />
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.movieListContainerCards}>
                {
                    filmes &&
                    filmes.map(filme =>
                        <Card filme={filme} key={filme.id} />
                    )
                }
                {
                    !filmes.length &&
                    <div className={styles.movieListNotFound}>
                        {
                            busca &&
                            'Não foi encontrado nenhum filme com o nome buscado'
                        }
                        {
                            !busca &&
                            'Não foi encontrado nenhum filme'
                        }
                    </div>
                }
            </div>
        </div>
    )
}