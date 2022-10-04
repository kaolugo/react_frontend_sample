import logo from './levvel-logo.svg';
import './App.css';
import Sample from './Sample.jsx'

function ProvidedHomePage() {
    return (
        <div className="App">
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
    
            <div>
              <Sample />
            </div>
          </header>
        </div>
      );
}

export default ProvidedHomePage;