import React from 'react';
import './styles.css'
import ListsContainer from './containers/ListsContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h2>To-Do, Doing, Done Lists</h2>
      </header>
      <ListsContainer />
    </div>
  );
}

export default App;
