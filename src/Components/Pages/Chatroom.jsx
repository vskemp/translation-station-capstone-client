
import React, { Component } from "react";
import Styled from "styled-components";
import { getChat, newRoom } from "../Utils/utilities";
import WriteMessage from "../Forms/WriteMessage";

const ChatBox = Styled.div`
    height: 100vh;
    width: 80%;
    margin: 20px;
    background-color: white;
    display: flex;
    justify-content:flex-end;
    flex-direction: column;
`;

class Chatroom extends Component {
  state = {
    chatName: null,
    userName: null,
    lastMessage: 0,
    messages: [],
    currentMessage: ""
  };

  async componentDidMount() {
    await this.chooseRoom();
    await this.chatUpdate();
  }

  chatUpdate = async () => {
    setInterval(async () => {
      if (this.state.chatName !== null) {
        const chats = await getChat(
          this.state.chatName,
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
      }
    }, 300);
  };

  async chooseRoom() {
    const chatName = prompt("Which language?", "Spanish");
    const response = await newRoom(chatName);
    if (response.data.length === 0) {
      const userName = prompt("What should your name be?");
      this.setState({
        chatName,
        userName
      });
    }
  }

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
          chatroom={this.state.chatName}
          username={this.state.userName}
        />
      </ChatBox>
    );
  }
}

export default Chatroom;