
import React, { Component } from "react";
import Styled from "styled-components";
import { getChat, enterChat } from "../Utils/utilities";
import WriteMessage from "../Forms/WriteMessage";
import cookie from 'react-cookie';

const ChatBox = Styled.div`
    width: 80%;
    padding: 20px;
    margin: 20px;
    background-color: white;
    display: flex;
    justify-content:flex-end;
    flex-direction: column;
    overflow: auto;
`;

class Chatroom extends Component {
  state = {
    language: "es",
    account: "bork",
    token: "0tjTnRupilvelAtpbjEIQw==",
    lastMessage: 0,
    messages: [],
    currentMessage: ""
  };

  async componentDidMount() {
    this.setState({
      account: cookie.load('account'),
      token: cookie.load('token')
    })
    await this.startChat();
    await this.chatUpdate();
  }

  chatUpdate = async () => {
    setInterval(async () => {
      const chats = await getChat(
        this.state.language,
        this.state.lastMessage
      );
      this.setState(state => {
        const messages = state.messages.concat(chats.data);
        const lastMessage =
          chats.data.length > 0
            ? chats.data[chats.data.length - 1].id
            : state.lastMessage;
        return {
          messages,
          lastMessage
        };
      });
    }, 300);
  };

  startChat = async () => {
    const chats = await enterChat(
      this.state.language
    );
    this.setState(state => {
      const messages = state.messages.concat(chats.data);
      const lastMessage =
        chats.data.length > 0
          ? chats.data[chats.data.length - 1].id
          : state.lastMessage;
      return {
        messages,
        lastMessage
      };
    });
  };

  render() {
    const { messages } = this.state;
    return (
      <ChatBox>
        {messages.map(message => (
          <p key={message.id}>
            {message.name}: {message.message}
          </p>
        ))}
        <WriteMessage
          token={this.state.token}
          account={this.state.account}
        />
      </ChatBox>
    );
  }
}

export default Chatroom;