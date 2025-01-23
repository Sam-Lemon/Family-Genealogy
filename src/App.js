import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import "./styles/App.css";
// import ApiTest from "./API/ApiTest";
import HomePage from "./pages/HomePage";
=======
import ApiTest from "./components/APITest";

function HomePage() {
  return <h1>Home Page</h1>;
}
>>>>>>> e1ac451e1af77ae98ae5ecef78868a545a017622

function LemonFamily() {
  return <h1>Lemon Family</h1>;
}

function HartFamily() {
  return <h1>Hart Family</h1>;
}

function SteckleFamily() {
  return <h1>Steckle Family</h1>;
}

function KeeslerFamily() {
  return <h1>Keesler Family</h1>;
}

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <nav class="navbar ubuntu">
        <Link to="/">Home</Link>
        <Link to="/lemon">Lemon</Link>
        <Link to="/hart">Hart</Link> 
        <Link to="/steckle">Steckle</Link>
        <Link to="/keesler">Keesler</Link>
        {/* <Link to="/api-test">API Test</Link> */}
=======
      <nav>
        <Link to="/">Home</Link> | <Link to="/lemon">Lemon</Link> |{" "}
        <Link to="/hart">Hart</Link> | <Link to="/steckle">Steckle</Link> |{" "}
        <Link to="/keesler">Keesler</Link> | <Link to="/api-test">API Test</Link>
>>>>>>> e1ac451e1af77ae98ae5ecef78868a545a017622
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lemon" element={<LemonFamily />} />
        <Route path="/hart" element={<HartFamily />} />
        <Route path="/steckle" element={<SteckleFamily />} />
        <Route path="/keesler" element={<KeeslerFamily />} />
<<<<<<< HEAD
        {/* <Route path="/api-test" element={<ApiTest />} /> */}
=======
        <Route path="/api-test" element={<ApiTest />} />
>>>>>>> e1ac451e1af77ae98ae5ecef78868a545a017622
      </Routes>
    </Router>
  );
}

export default App;
