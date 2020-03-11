import React from 'react';
import TranslationForm from '../Forms/TranslationForm';
// import { Flex } from "@chakra-ui/core";


function Home() {
    return (
        <div className="home">
            <h2>Welcome To Translation Station</h2>
            <h3>Easily Communicate In Other Languages</h3>
            <TranslationForm />

        </div>
    )
}

export default Home;