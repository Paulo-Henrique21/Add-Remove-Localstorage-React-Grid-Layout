import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Box from './components/Box'
import OneProd from './components/OneProd'
import TwoProd from './components/TwoProd'

export default function App (){
  return(
    //Rotas
    <Router>
      <Routes>
        <Route  path='/'  element={<OneProd/>}/>
        <Route path='/twoprod' element={<TwoProd/>}/>
        <Route path='/box' element={<Box/>}/>
      </Routes>
    </Router>
  )
}