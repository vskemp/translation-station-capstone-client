import React, { Component } from "react";
import axios from "axios";
import {
  Button,
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

  handleDelete = async event => {
    event.persist();
    await axios.post("/phrases/remove", {
      account: this.state.account,
      token: this.state.token,
      id: event.target.value
    });
    alert('Your phrase has been deleted!');
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
        <h2>Saved Phrases</h2>
        <ul>
          {phrases.map(phrase => {
            return <li key={phrase.id}>
              {phrase.language}: "{phrase.phrase}" = "{phrase.translation}"
              <Button onClick={e => this.handleDelete(e, "value")} value={phrase.id} variantColor="red" size="sm">Delete</Button>
            </li>
          })}

        </ul>
      </div>
    );
  }
}

export default Phrases;
