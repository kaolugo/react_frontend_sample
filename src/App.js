import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProvidedHomePage from './ProvidedHomePage';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<ProvidedHomePage />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
