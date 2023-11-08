import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar></NavBar>
      </header>
      <div className='frontPage'>
        <FrontPage></FrontPage>
      </div>

    </div>
  );
}

export default App;
