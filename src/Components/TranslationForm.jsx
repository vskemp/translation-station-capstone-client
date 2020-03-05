import React, { Component } from "react";
// import cookie from "react-cookies";
import axios from "axios";
import LanguageCodes from '../Utils/LanguageCodes';



class TranslationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        LanguageCodes: [],
        value: "",
        translated: "...",
        language: "es"
        };
        this.translate = this.translate.bind(this);
    }


    translate() {
        axios.post("http://localhost:5252/translate/do", {language: this.state.language, message:this.state.value})
        .then((data)=> {
            this.setState({
            translated: data.data.data.translations[0].translatedText
            });
            console.log(data.data.data.translations[0].translatedText);
        })
        .catch(err => {
            console.log("error");
        });
    }

    render() {

        return (
        <div>
            <p>Choose Your Language</p>
           { /* iterate through language options to create a select box */}
            <select
                className="select-language"
                value= "language"
                onChange={e => this.changeHandler(e.target.value)}
            >
            {/* { LanguageCodes.map(lang => (
                <option key={lang.language} value={lang.language}>
                    {lang.name}
                </option>
            ))
            }; */}
            </select> 
            <div className="please">Please Enter Your Desired Translated Words</div>
            <div className="bar">
            <input
                size="50"
                placeholder="Enter English"
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                type="text"
            />
            <button onClick={this.translate}>Submit</button>
            </div>
            <h1> Your Translation: </h1>
            <h3>"{this.state.translated}"</h3>
        </div>
        );
    }
    }

    
    export default TranslationForm;
