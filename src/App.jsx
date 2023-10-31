import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Levels from "./components/Levels/Levels";
import Level11 from "./components/Levels/Level/Level1/Level11";
import Level12 from "./components/Levels/Level/Level1/Level12";
import Level13 from "./components/Levels/Level/Level1/Level13";
import Level14 from "./components/Levels/Level/Level1/Level14";
import Level15 from "./components/Levels/Level/Level1/Level15";
import Final from "./components/Levels/Level/Level1/Final";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/level/1/1" element={<Level11 />} />
        <Route path="/level/1/2" element={<Level12 />} />
        <Route path="/level/1/3" element={<Level13 />} />
        <Route path="/level/1/4" element={<Level14 />} />
        <Route path="/level/1/5" element={<Level15 />} />
        <Route path="/level/Final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
