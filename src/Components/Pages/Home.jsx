import React from 'react';
import Images from '../Images/lang.png';
import TranslationForm from '../TranslationForm';


function Home() {
    return (
        <div>
            <h2>Welcome To Translation Station</h2>
            <div className="salut">
                <img src={Images} alt="Hello in different languages"></img>
            </div>
            <TranslationForm />
        </div>
    )
}

export default Home;