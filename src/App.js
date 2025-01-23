import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <h1>Home Page</h1>;
}

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
      <nav>
        <Link to="/">Home</Link> | <Link to="/lemon">Lemon</Link> |{" "}
        <Link to="/hart">Hart</Link> | <Link to="/steckle">Steckle</Link> |{" "}
        <Link to="/keesler">Keesler</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lemon" element={<LemonFamily />} />
        <Route path="/hart" element={<HartFamily />} />
        <Route path="/steckle" element={<SteckleFamily />} />
        <Route path="/keesler" element={<KeeslerFamily />} />
      </Routes>
    </Router>
  );
}

export default App;
