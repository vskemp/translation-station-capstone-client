import React from 'react';
import { Button } from "@chakra-ui/core";
function Logout() {
  return (
    <div>
      <div>
        <h2>Logout</h2>
      </div>
      <div>
        Click Here To Logout:
        <Button variantColor="teal">Log Out</Button>
      </div>
    </div>
  )
};

export default Logout;