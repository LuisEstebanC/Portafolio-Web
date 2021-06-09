import React, { Fragment } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards'

function App() {
  return (
    <Fragment>

        <Navbar />
        <div id='clip'>
        <div id='banner' ><Banner/> </div>
      </div>

      <div id="about"><About /></div>
      <div id="cards"><Cards /></div>
      <div  id="contact"><Contact/></div>
    </Fragment>
  );
}

export default App;
