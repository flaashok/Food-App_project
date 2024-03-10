import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Success from './pages/Success';
import Home from './pages/Home';
import Errors from './pages/Errors';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/success' element={<ProtectedRoute element={<Success />}/>}/>
        <Route path='/*' element={<Errors />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
