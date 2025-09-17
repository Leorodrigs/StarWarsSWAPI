import './index.css'
import { Routes, Route } from 'react-router'
import { Home } from "./assets/components/Home"
import { Characters } from './assets/components/Characters'
import { CharacterDetail } from './assets/components/CharacterDetail'

function App() {  

  return (        
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/character/:id' element={<CharacterDetail />} />          
    </Routes> 
  )
}

export default App
