import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import Components
import { Menu } from "./components";

// import Pages
import {
  Characters,
  CharacterDetail,
  Home,
  Quotes,
  QuoteDetail,
  NotFound,
} from "./pages";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/characters" exact element={<Characters />} />
          <Route path="/character/:id" exact element={<CharacterDetail />} />
          <Route path="/quotes" exact element={<Quotes />} />
          <Route path="/quote/:id" exact element={<QuoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
