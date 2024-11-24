import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import useTheme from "../../hooks/useTheme";
import styles from './styles.module.css'

export default function ControllerItem({ handler, value, title, icon, className, orderBy, sortBy, disabled }) {
    const { theme } = useTheme()

    const selectedColor = theme === 'dark' ? 'var(--secondary)' : 'var(--primary)';

    return (
        <button className={className} onClick={handler} value={value} data-sorted={sortBy === value} disabled={disabled}>
            {icon}
            <span className={styles.controllerItemTitle}>{title}</span>
            <span className={styles.movieListOrdenacaoArrows}>
                <LuMoveDown
                    color={
                        sortBy === value && orderBy === 'desc'
                            ? selectedColor
                            : undefined
                    }
                />
                <LuMoveUp
                    color={
                        sortBy === value && orderBy === 'asc'
                            ? selectedColor
                            : undefined
                    } />
            </span>
        </button>)
}