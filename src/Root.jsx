import ThemeButton from './components/themeButton'
import { MoviesProvider } from './contexts/moviesContext'
import useTheme from './hooks/useTheme'
import Home from './pages/home'
import './Root.css'

export default function Root() {
  const { theme, toggleTheme } = useTheme()


  return (
    <div data-theme={theme}>
      <MoviesProvider>
        <Home />
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </MoviesProvider>
    </div>
  )
}

