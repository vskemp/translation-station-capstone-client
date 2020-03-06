import React, { Component } from "react";
import axios from "axios";
import LanguageCodes from "../Utils/LanguageCodes";

class TranslationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      translated: "...",
      language: "es"
    };
    this.translate = this.translate.bind(this);
  }

  changeHandler(e) {
    this.setState({ language: e });
  }

  translate() {
    axios
      .post("http://localhost:5252/translate/do", {
        language: this.state.language,
        message: this.state.value
      })
      .then(data => {
        console.log(data);
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
        <p>Choose Your Language To Translate To:</p>
        {/* iterate through language options to create a select box */}
        <select
          className="select-language"
          value={this.state.language}
          onChange={e => this.changeHandler(e.target.value)}
        >
          {Object.keys(LanguageCodes).map(lang => (
            <option key={lang} value={lang}>
              {LanguageCodes[lang]}
            </option>
          ))}
          ;
        </select>
        <div className="please">What Would You Like To Say?</div>
        <div className="bar">
          <input
            size="50"
            placeholder="Enter Any Language"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            type="text"
          />
          <button onClick={this.translate}>Submit</button>
        </div>
        <h1> Your Translation: </h1>
        <h3>"{this.state.translated}"</h3>
        <button onClick>Save Translation</button>
      </div>
    );
  }
}

export default TranslationForm;
