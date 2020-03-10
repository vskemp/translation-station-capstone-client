import React from 'react';
import './App.css';
import { ThemeProvider } from "@chakra-ui/core";
// import LoginForm from './Components/LoginForm';
// import SignupForm from './Components/SignupForm';
// import Images from './Components/Images/lang.png';


import NavBar from './Components/Header/NavBar';
import Footer from "./Components/Footer/footer";
// import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      {/* <h1>Welcome to Translation Station</h1>
      <div className="salut">
        <img src={Images} alt="Hello in different languages"></img>
      </div>
      <h2>Be able to talk to others in different languages easily
    </h2>
      <h3>Please Login or Sign Up!</h3> */}
      {/* <Home /> */}
      <ThemeProvider>
        <NavBar />
        {/* <LoginForm />
        <SignupForm /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
