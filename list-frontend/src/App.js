import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css'
import ListsContainer from './containers/ListsContainer';
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <Router>
      <header>
        <h2>To-Do, Doing, Done Lists</h2>
      </header>
      <Route path="/" render={() => <NavBar />} />
      <Route exact path="/lists" render={(routerProps) => <ListsContainer {...routerProps}/>} />
      <Route exact path="/search" render={(routerProps) => <SearchContainer {...routerProps} />} />
    </Router>
  );
}

export default App;
