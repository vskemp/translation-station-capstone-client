import React from 'react';
import './App.css';
import { ThemeProvider} from "@chakra-ui/core";
import NavBar from './Components/Header/NavBar';
import Footer from "./Components/Footer/footer";
// import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    {/* <Home /> */}
    <ThemeProvider />
    <NavBar />
    <Footer />
    </>
  );
}

export default App;
