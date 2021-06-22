import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards';
import {ThemeProvider} from 'styled-components';

const LightTheme = {
  pageBackground: "#f2f0f0",
  titleColor: "#B73225",
  fontColor: "#282c36",
  tagLineColor: "black",
  iconsColor: '#242424',
  boxShadow: '0 18px 12px rgb(0 0 0 / 19%);',
  inputBackgrounds: '#f3efef',
  inputBorderBottom:'2px solid #b1a4a4',
  inputBottomBackground:'',
  tittleColorForm:'#B73225',
};

const DarkTheme = {
  pageBackground: "#36393f",
  titleColor: "white",
  fontColor: "white",
  tagLineColor: "lavender",
  iconsColor: 'white',
  boxShadow: '0 18px 12px rgb(255 255 255 / 19%);',
  inputBackgrounds: '#40444b',
  inputBorderBottom:'',
  inputBottomBackground:'#B73225',
  tittleColorForm:'#eb6d61',
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {

  const [theme, setTheme] = useState("light")
  return (
      <ThemeProvider theme={themes[theme]}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <div id='banner' ><Banner theme={theme}/> </div>
        <div id="about"><About /></div>
        <div id="cards"  ><Cards theme={theme}/></div>
        <div  id="contact"><Contact/></div>
        
      </ThemeProvider>
  );
}

export default App;
