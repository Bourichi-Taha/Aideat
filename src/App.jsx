import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Branches from './pages/Branches'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/branches' element={<Branches />} />
      </Route>
    </Routes>
  )
}

export default App
