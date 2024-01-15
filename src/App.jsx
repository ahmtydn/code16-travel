import React from 'react';
import NavBar from './components/navbar/NavBar';
import './app.css';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
