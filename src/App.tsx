import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <>
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Tasks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
