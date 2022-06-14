import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './container/About/About';
import Intro from './container/Intro/Intro';
import Projects from './container/Projects/Projects';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
