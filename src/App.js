import logo from './logo.svg';
import './App.css';
import Topnav from './components/topnav/topnav';
import Sidenav from './components/sidenav/sidenav';
function App() {
  return (
    
    <div className="App">
      <Welcome name="Dhanunjay"/>
      <Topnav />
      <div className='side'>
      <Sidenav/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function Welcome(props){
  return <div className='heading'>
    {window.alert('Hello'+props.name)}
    <h1>Welcome To React World, {props.name}</h1>
    </div>
}

