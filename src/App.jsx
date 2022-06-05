/** @format */

import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
