import React, { Component } from "react";
import axios from "axios";
import LanguageCodes from "../Utils/LanguageCodes";

class TranslationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      translated: "...",
      language: "es",
      phrase: "",
      translation: "",
      account: "",
      token: ""
    };
  }

  changeHandler(e) {
    this.setState({ language: e });
  }

  translate(e) {
    e.preventDefault();
    axios
      .post("/translate/do", {
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
  handleSubmit(e) {
    e.preventDefault(e);
    axios
      .post("/phrases/add", {
        phrase: "veronica"
        // account: this.state.account,
        // token: this.state.token,
        // language: this.state.language,
        // phrase: this.state.phrase,
        // translation: this.state.translated
      })
      .then(function (response) {
        console.log(response.data);
      })
    // token: this.state.token,
    // language: this.state.language,
    // phrase: this.state.phrase

  }
  // console.log(this.state.language);
  // console.log(this.state.token);
  // console.log(this.state.phrase);
  // console.log(this.state.translation);
  // console.log(this.state.account);


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
          <button
            onClick={this.handleSubmit}>Save Translation</button>
          <h1>Your saved phrases:</h1>
          <h3>{this.state.translated}</h3>

        </form>

      </div>
    );
  }
}

export default TranslationForm;
