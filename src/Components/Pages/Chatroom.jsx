import Images from '../Images/lang.png';
import React from 'react';

function Chatroom() {
  return (
    <div>
      <h2>Chatroom</h2>
      <div className="salut">
        <img src={Images} alt="Hello in different languages"></img>
        THE CHATROOM
      </div>
    </div>
  )
};

export default Chatroom;