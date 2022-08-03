import "./App.css"
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from "./pages/home"
import { Categories } from "./pages/categories"
import { Basket } from "./pages/basket"
import { useEffect, useState } from "react"
import { StoreItem } from "./pages/storeItem"
import { PageNotFound } from "./pages/pageNotFound"


function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
        <Route index element={<Navigate to='/products' />} />
          <Route path='/products' element={<Home/>} />
          <Route path='/products/:itemId' element={<StoreItem/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/basket' element={<Basket/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App

