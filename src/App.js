import React, {useState, useEffect} from 'react';
import { Route, NavLink } from 'react-router-dom';

function App(props) {
  
  return (
    <div className="App">
      <header className='header'>
        <div>
          <h2>React starter</h2>
          <h3>code stuff</h3>
        </div>
        <nav>
          <NavLink className='navLink' to='/'>Home</NavLink>
          <NavLink className='navLink' to='/Projects'>Projects</NavLink>
          <NavLink className='navLink' to='/Contact'>Contact</NavLink>
        </nav>
      </header>
      
        {/* <Route exact path='/Projects' render={props => <Projects {...props} />} /> */}
    </div>
  );
}

export default App;
