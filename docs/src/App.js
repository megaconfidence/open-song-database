/**  @jsx jsx  */
import { jsx } from "@emotion/core";
import Docs from "./routes/Docs/";
import Nav from "./components/Nav";
import Patron from "./routes/Patron";
import ApiKey from "./routes/ApiKey";
import NotFound from "./components/NotFound";
import { AppContext, vars } from "./components/AppContext";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";
import PlayGround from "./routes/PlayGround";

const App = () => {
  return (
    <AppContext.Provider value={vars}>
      <div css={{ position: "relative" }}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/docs" component={Docs} />
            <Route path="/patron" component={Patron} />
            <Route path="/apikey" component={ApiKey} />
            <Route path="/playground" component={PlayGround} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export default App;
