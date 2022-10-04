import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProvidedHomePage from './ProvidedHomePage';
import BlogHome from './BlogHome';
import AuthorPage from './AuthorPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<BlogHome />}/>
          <Route exact path='/sample' element={<ProvidedHomePage />}/>
          <Route exact path='/author' element={<AuthorPage />}/>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
