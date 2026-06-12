import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <h1 className="bg-green-500 py-10 text-white text-3xl text-center capitalize">
        sarfraz hassan
      </h1>
    </>
  );
}

export default App;
