import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
