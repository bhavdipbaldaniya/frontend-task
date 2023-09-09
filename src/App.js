import React from 'react'
import './App.css';
import Introduction from './component/Introduction'
import Discoverd from './component/Discoverd'
import Leadingbeer from './component/Leadingbeer'
import Footer from './component/Footer'
import Features from './component/Features'


function App() {
  return (
    <>
      <Introduction />
      <Leadingbeer />
      <Discoverd />
      <Features />
      <Footer />
    </>
  );
}

export default App;
