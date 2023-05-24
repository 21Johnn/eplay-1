import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import GlobalCss from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss></GlobalCss>
      <div className="App container">
        <Header></Header>
      </div>
      <Rotas />
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
