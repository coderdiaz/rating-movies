import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Login from './pages/login';
import Home from './pages/home';
import Movies from './pages/movies';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
