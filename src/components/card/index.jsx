import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Stars from "../stars";


export default function Card({ filme }) {

    const navigate = useNavigate()
    function handleNavigate() {
        navigate(`/movie/${filme.id}`)
    }

    return (
        <div className={styles.card} onClick={handleNavigate}>
            <img
                className={styles.cardImage}
                src={filme.imagens.principal.src}
            />
            <div className={styles.cardContainer}>
                <div className={styles.cardNome}>
                    {filme.title}
                </div>
                <div className={styles.cardRating}>
                    <Stars stars={filme.stars} />
                </div>
                <div className={styles.cardRating}>
                    <Stars stars={filme.release_date} />
                </div>
            </div>
        </div >
    );
}
