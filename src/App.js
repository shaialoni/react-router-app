import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Card from './components/Card'

const App = () => {
    //let { user } = useParams()
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/:user' element={<Card/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App