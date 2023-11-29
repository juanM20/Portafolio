import './App.css';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/ContactMe/ContactMe';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar></NavBar>
      </header>
      <div className='frontPage'>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path='/Home' element={<FrontPage />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
