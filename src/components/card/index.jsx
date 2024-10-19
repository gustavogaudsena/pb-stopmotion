import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Stars from "../stars";
import { useState } from "react";
import Image from "../image";


export default function Card({ movie }) {
    const navigate = useNavigate()

    const movieDate = (new Date(movie.release_date)).toLocaleDateString('pt-BR')
    function handleNavigate() {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div className={styles.card} onClick={handleNavigate}>
            <Image
                className={styles.cardImage}
                src={movie.imagens.principal.src}
            />
            <div className={styles.cardContainer}>
                <div className={styles.cardNome}>
                    {movie.title}
                </div>
                <div className={styles.cardNomeOriginal}>
                    {movie.originalTitle}

                </div>
                <div className={styles.cardRow}>
                    <div className={styles.cardRating}>
                        <Stars stars={movie.stars} />
                    </div>
                    <div className={styles.cardDate}>
                        {movieDate}
                    </div>
                </div>
            </div>
        </div >
    );
}
