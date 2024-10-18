import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Movie from './pages/movie/index.jsx';
import { movieLoader, rootLoader } from './api/loaders/loader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    loader: movieLoader
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
