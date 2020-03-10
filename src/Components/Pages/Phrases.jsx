import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/core";
import cookie from 'react-cookie'

class Phrases extends Component {
  state = {
    phrases: [],
    account: "bork",
    token: "ryNB5dlAglI0QsnALhy36A=="
  };

  componentDidMount() {
    this.setState({
      account: cookie.load('account'),
      token: cookie.load('token')
    })
    this.retrieve(cookie.load('account'), cookie.load('token'));
  }

  retrieve(account, token) {
    axios
      .post("/phrases/retrieve", {
        account: account,
        token: token
      })
      .then(response => {
        const myData = response.data;
        this.setState({
          phrases: myData
        })
      })

  }
  render() {
    console.log(this.state);
    const phrases = this.state.phrases;
    return (
      <div>
        <h1>Saved Phrases</h1>
        <ul>
          {phrases.map(phrase => {
            return <li key={phrase.id}>{phrase.id}. {phrase.language}: {phrase.phrase} - {phrase.translation}</li>

          })}
        </ul>
      </div>
    );
  }
}

export default Phrases;
