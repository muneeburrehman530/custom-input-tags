import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputTags from "./components/InputTags";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className="text-center mb-4 ">Welcome to the input tags</h1>
        <InputTags />
      </div>
    </>
  );
}

export default App;
