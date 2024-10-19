import styles from './styles.module.css';

export default function Badge({ name }) {
    return (
        <div className={styles.badge}>
            {name}
        </div>
    )
}