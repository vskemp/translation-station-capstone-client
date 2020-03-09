import React, { Component } from "react";
import axios from "axios";
import LanguageCodes from "../Utils/LanguageCodes";

class TranslationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      translated: "...",
      language: "en"
    };
  }

  changeHandler(e) {
    this.setState({ language: e });
  }

  translate(e) {
    e.preventDefault();
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
        <form>
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
            <button onClick={e => this.translate(e)}>Submit</button>
          </div>
          <h1> Your Translation: </h1>
          <h3>"{this.state.translated}"</h3>
          <button>Save Translation</button>
        </form>
        <div className="untranslated"
          value={this.state.language}
          onChange={e => this.translate(e)}>
          <ul>
            <h2>English Common Phrases:</h2>
            <li>Hello, my name is...</li>
            <li>What is your name?</li>
            <li>How are you?</li>
            <li>Where is the bathroom?</li>
            <li>Thank you</li>
            <li>Yes</li>
            <li>No</li>
            <li>I do not understand</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TranslationForm;
