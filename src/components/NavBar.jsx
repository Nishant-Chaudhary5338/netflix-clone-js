/** @format */

import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between w-full absolute p-2 items-center">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        <div className="space-x-4">
          <Button theme="secondary">Sign in</Button>
          <Button theme="primary">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
