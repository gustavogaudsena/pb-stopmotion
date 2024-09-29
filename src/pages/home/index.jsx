import { useState } from 'react';
import Header from '../../components/header';
import MovieList from '../../components/movieList';
import styles from './styles.module.css';
import { v4 as uuidv4 } from 'uuid';

const KEYWORD_STOPMOTION_ID = 10121;
const GENRE_ANIMATION_ID = 16;

const MOCK_FILMES = [
    {
        id: uuidv4(), // 3933
        title: 'A Noiva Cadáver',
        overview: "As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.",
        release_date: "2005-09-12",
        director: 'Tim Burton',
        popularity: 173.657,
        imagens: {
            principal: {
                src: '/images/noiva-cadaver.jpg'
            }
        }
    },
    {
        id: uuidv4(), // 14836
        title: 'Coraline e o Mundo Secreto',
        overview: "Entediada em sua nova casa, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Coraline se encanta com a descoberta, mas logo descobre que há algo de errado quando seus pais alternativos tentam mantê-la eternamente nesse mundo paralelo.",
        release_date: "2009-02-05",
        director: 'Henry Selick',
        popularity: 228.669,
        imagens: {
            principal: {
                src: '/images/coraline.jpg'
            }
        }
    },
    {
        id: uuidv4(), // 9479
        title: 'O Estranho Mundo de Jack',
        overview: "Jack Skellington, o Rei das Abóboras, se cansa de fazer o Dia das Bruxas todos os anos e deixa os limites da cidade. Por acaso, acaba atravessando o portal do Natal, onde vê a alegria do espírito natalino. Ao retornar para a Cidade do Halloween, sem ter compreendido o que viu, ele começa a convencer os cidadãos a sequestrarem o Papai Noel e fazerem seu próprio Natal. Apesar de sua leal namorada Sally ser contra, o Papai Noel é capturado e os fatos mostrarão que Sally estava certa o tempo todo.",
        release_date: "1993-10-09",
        director: 'Tim Burton',
        popularity: 158.329,
        imagens: {
            principal: {
                src: '/images/mundo-jack.jpg'
            }
        }
    },
]

export default function Home() {
    const [busca, setBusca] = useState('');
    const [filmes, setFilmes] = useState(MOCK_FILMES);

    return (
        <div className={styles.home}>
            <Header busca={busca} setBusca={setBusca} />

            <MovieList filmes={filmes} setFilmes={setFilmes} busca={busca} />
        </div>
    )
}