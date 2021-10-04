import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/character/:id" exact component={CharacterDetail} />
          <Route path="/quotes" exact component={Quotes} />
          <Route path="/quote/:id" exact component={QuoteDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
