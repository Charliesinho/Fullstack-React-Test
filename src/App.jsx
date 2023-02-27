import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllKrylimons from './pages/allKrylimons'
import OneKrylimon from './pages/oneKrylimon'
import NewKrylimon from './pages/newKrylimon'
import UpdateKrylimon from './pages/updateKrylimon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
      <Route path="/krylimons" element={<AllKrylimons />} />
      <Route path="/krylimons/:Id" element={<OneKrylimon />} />
      <Route path="/krylimons/create" element={<NewKrylimon />} />  
      <Route path="/krylimons/update/:Id" element={<UpdateKrylimon />} />  
      <Route path='*' element={<h1>404 Not Found</h1>} />
      
    </Routes>
    </div>
  )
}

export default App
