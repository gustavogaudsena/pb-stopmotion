import styles from "./styles.module.css";


export default function Card({ filme }) {

    function handleNavigate() { }

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
                <div className={styles.cardDiretor}>
                    Diretor: {filme.director}
                </div>
            </div>
        </div >
    );
}
