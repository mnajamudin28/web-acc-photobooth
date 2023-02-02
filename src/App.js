import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaketProps from "./pages/PaketProps";
import NameRequest1 from "./pages/NameRequest1";
import NameRequest2 from "./pages/NameRequest2";
import NameRequestA4 from "./pages/NameRequestA4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="PaketProps" element={<PaketProps />} />
          <Route path="NameRequest1" element={<NameRequest1 />} />
          <Route path="NameRequest2" element={<NameRequest2 />} />
          <Route path="NameRequestA4" element={<NameRequestA4 />} />
          {/* dalam tanda kutip untuk menuju /produc etc, di element adalah file jsx */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

