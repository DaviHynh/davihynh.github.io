import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
