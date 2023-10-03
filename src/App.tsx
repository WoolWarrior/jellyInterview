import React, { useState } from "react";
import "./App.css";
import HeroPage from "./Pages/HeroPage";
import { Hero } from "./Type";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [hero, setHero] = useState<Hero>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home setHero={setHero} />} />
          {hero && <Route path="hero" element={<HeroPage hero={hero} />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
