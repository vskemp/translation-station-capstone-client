import React, { Component } from "react";
// import cookie from "react-cookies";
import axios from 'axios';

class TranslationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            translated: '...',
        }
        this.translate = this.translate.bind(this);
    }
    translate() {
        // console.log(this.state.value);
// PLEASE GENERATE YOUR OWN API KEY ON GOOGLE
        // axios.get(`https://translation.googleapis.com/language/translate/v2?target=${cookie.load("language")}&key="=${this.state.value}`)
        //     .then(data => {
        //         // console.log(data);
        //         this.setState({ translated: data.data.data.translations[0].translatedText })
        //         // console.log(data.data.data.translations[0].translatedText)
        //     }).catch(err => {
        //         console.log('error')
        //     })
    }
    render() {
        return (
            <div>
                <div className="please">Please Enter Your Desired Translated Words</div>
                <div className="bar">
                <input
                    size="50"
                    placeholder="Enter English"
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    type="text" />
                <button onClick={this.translate}>Submit</button>
                </div>
                <h1> Your Translation: </h1>
                    <h3>"{this.state.translated}"</h3>
            </div>
        );
    }
}


export default TranslationForm;