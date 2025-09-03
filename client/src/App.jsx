import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StorageDetails from './pages/StorageDetails'

const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage-details" element={<StorageDetails />} />
      </Routes>
    </ >
  )
}

export default App