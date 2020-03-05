import React from 'react';
import Images from '../Images/lang.png';
import TranslationForm from '../TranslationForm';
import TranslatedCommon from '../TranslatedCommon';
// import NavBar from '../Header/NavBar';
// import NavBar from '../Header/NavBar';
// import Footer from '../Footer/footer';

function Home() {
    return (
    <div>
        <h2>Welcome To Translation Station</h2>
        <div className="salut">
                <img src={Images} alt="Hello in different languages"></img>
        </div>
        <TranslationForm />
        <TranslatedCommon />
    </div>
    )}

export default Home;