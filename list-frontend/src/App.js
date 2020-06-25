import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css'
import ListsContainer from './containers/ListsContainer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <header>
        <h2>To-Do, Doing, Done Lists</h2>
      </header>
      <Route path="/" render={() => <Home />} />
      <Route path="/lists" render={(routerProps) => <ListsContainer {...routerProps}/>} />
    </Router>
  );
}

export default App;
