import { Route, Routes, } from 'react-router-dom'
import Home from './componets/Home'
import About from './componets/About'
import Contact from './componets/Contact'
import Layout from './componets/Layout'
import Portfolio from './componets/Portfolio'
import Skills from './componets/Skills'
import Dashboard from './componets/Dashboard'
import './App.scss'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}
