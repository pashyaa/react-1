import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HashRouter>
          <Route path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
