import React, { Component } from "react";
import axios from "axios";
import LanguageCodes from "../Utils/LanguageCodes";
import {
  Button,
  Select,
  FormControl,
  Input,
  FormHelperText,
} from "@chakra-ui/core";
// import { userInfo } from "os";
// import cookies from 'next-cookies';


class TranslationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      translated: "...",
      language: "es",
      phrase: "",
      account: "bork",
      token: "IJpgoGUww1HbaOD1QfNLwQ=="
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
          translated: data.data.data.translations[0].translatedText,
          phrase: this.state.value
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
        phrase: this.state.value,
        account: this.state.account,
        token: this.state.token,
        language: this.state.language,
        translation: this.state.translated
      })
      .then(function (response) {
        const savedPhrases = response.data;
        console.log(savedPhrases);

      })
  }

  retrieve(e) {
    e.preventDefault(e);
    axios
      .post("/phrases/retrieve", {
        account: this.state.account,
        token: this.state.token
      })
      .then(function (response) {
        const myData = response.data;
        console.log(myData);
      })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <p>Choose Your Language To Translate To:</p>
          {/* iterate through language options to create a select box */}
          <Select
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
        </Select>
          <div className="please">What Would You Like To Say?</div>
          <div>
            <FormControl>
              <Input
                width="30rem"
                className="input"
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                type="text"
              />
              <FormHelperText id="email-helper-text">
                Enter any language
              </FormHelperText>
            </FormControl>
            <Button variantColor="teal" onClick={e => this.translate(e)}>Submit</Button>
          </div>
          <h1> Your Translation: </h1>
          <h3>"{this.state.translated}"</h3>
          <Button variantColor="teal"
            onClick={e => this.handleSubmit(e)}>Save Translation</Button>
        </form>
        <Button variantColor="teal" onClick={e => this.retrieve(e)}>Retrieve Phrases</Button>
        <ul className="saved">{this.phrases}</ul>
      </div>
    );
  }
}

export default TranslationForm;
