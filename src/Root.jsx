import { MoviesProvider } from './contexts/moviesContext'
import Home from './pages/home'
import './Root.css'

export default function Root() {

  return (
    <>
      <MoviesProvider>
        <Home />
      </MoviesProvider>
    </>
  )
}

