import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProvidedHomePage from './ProvidedHomePage';
import BlogHome from './BlogHome';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<BlogHome />}/>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
