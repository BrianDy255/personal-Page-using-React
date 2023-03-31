import { useState } from 'react'
import './App.css'
import Card from '../components/Cards'
import NavBar from "../components/navbar"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import AboutMe from '../pages/aboutme'
import Home from "../pages/home"
import Footer from '../components/footer'
import MyPets from '../pages/pets'
import Travel from '../pages/travel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <BrowserRouter className="browserrouter">
      <main className='navbar'>
        <NavLink to="/" style={({isActive}) => ({
          color: isActive ? '#B7CADB' : '#CE7777' })}> 
          Home</NavLink>
        <NavLink to="/about" style={({isActive}) => ({
          color: isActive ? '#B7CADB' : '#CE7777' })}>
          About</NavLink>
        <NavLink to="/pets" style={({isActive}) => ({
          color: isActive ? '#B7CADB' : '#CE7777' })}>
          My Pets</NavLink>  
        <NavLink to="/travels" style ={({isActive}) => ({
          color: isActive ? '#B7CADB' : '#CE7777' })}>
            My Adventures</NavLink>
      </main>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<AboutMe></AboutMe>}/>
          <Route path="/pets" element={<MyPets></MyPets>} />
          <Route path='/travels' element={<Travel></Travel>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <Card/> */}
    </div>
  )
}

export default App
