import React from 'react';
import Images from '../Images/lang.png';

function Logout() {
  return (
    <div>
      <div>
        <h2>Logout</h2>
        <div className="salut">
          <img src={Images} alt="Hello in different languages"></img>
        </div>
      </div>
      <div>
        Click Here To Logout:
        <button>Log Out</button>
      </div>
    </div>
  )
};

export default Logout;