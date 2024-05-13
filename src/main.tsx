import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/reset.css'

//criar rotas cpm react
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'
import Home from './pages/Home.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([

  {
    /* Essa seria a paginga/rota pincipal */
    path:"/",
    element: <App/>,
    //pagina para erros
    errorElement: <ErrorPage />,
    //Essas sao as rotas filhas que serao carregadas
    // dentro da pagina principal parecido com handlebars
    children: [
      {
        path:"/",
        element: <Home/>
      },
    
      {
        path:"movie/:id",
        element: <Movie/>
      },
    
      {
        path:"search",
        element: <Search/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
