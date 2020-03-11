
import React, { Component } from "react";
import { sendMessage } from "../Utils/utilities";
import {
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  Button,
  Input,
  // Flex
} from "@chakra-ui/core";

class WriteMessage extends Component {
  state = {
    message: ""
  };
  messageChange = event => {
    this.setState({ message: event.target.value });
  };
  sendMessage = async event => {
    event.preventDefault();
    const response = await sendMessage(
      this.props.chatroom,
      this.props.username,
      this.state.message
    );
    this.setState({
      message: ""
    });
    console.log(response);
  };
  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <Input
          width="40rem"
          type="text"
          value={this.state.message}
          onChange={this.messageChange}
        />
        <Button variantColor="teal" type="submit">Send</Button>
      </form>
    );
  }
}

export default WriteMessage;