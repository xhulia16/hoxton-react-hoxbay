import "./App.css"
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from "./pages/home"
import { Categories } from "./pages/categories"
import { Basket } from "./pages/basket"
import { useEffect, useState } from "react"


function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home"/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/basket' element={<Basket/>} />
        </Routes>
      </main>
    </>
  )
}

export default App

