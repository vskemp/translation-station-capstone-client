import React, { Component } from "react";

import axios from "axios";

export default class SavedPhrases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      token: '',
      language: '',
      phrase: '',
      translation: '',
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const getPhrases = await axios.get("http://localhost:5252/phrases/retrieve", {
      phrase: this.state.phrases,
      translation: this.state.translation,
      language: this.state.language,
      account: this.state.account,
      token: this.state.token
    });
    console.log(getPhrases);
  };
  //   render() {
  //     console.log(this.state);
  //     return (


  //   }
  // };
}
