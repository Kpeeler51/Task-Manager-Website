import './App.css'
import {HashRouter, Route, Routes} from 'react-router'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
    {/* Globally displays the Navbar and handles where it will route to. */}
   <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
    <Footer /> {/* Globally displays the Footer */}
    </>
  )
}

export default App
