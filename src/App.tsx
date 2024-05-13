//links é usado para navegar entre as rotas como uma ancora
//o outlet carrega a pagina que esta configurada para carregar ao acessar a rota
import {Outlet} from "react-router-dom"
import Header from "./components/Header"
import './css/movies.css'
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
