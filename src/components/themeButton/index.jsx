
import { CiDark, CiLight } from "react-icons/ci";
import styles from './styles.module.css'

export default function ThemeButton({theme, toggleTheme}) {

    function toggleDarkMode() {
        toggleTheme()
      }

    return (<div className={styles.themeContainer}>
        <button className={styles.themeButton} onClick={toggleDarkMode} title='Aciona Dark Mode'>
            {
                theme === 'dark' &&
                <CiDark />
            }
            {
                theme === 'light' &&
                <CiLight />
            }
        </button>
    </div>)
}