import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar></NavBar>
      </header>
      <div className='frontPage'>
        <FrontPage></FrontPage>
      </div>


      <Footer />
    </div>
  );
}

export default App;
