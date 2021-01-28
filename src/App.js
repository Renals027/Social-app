import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IntroPage from "./components/intopage";
import Dashboard from "./components/Dashboard";
import Icons from "./components/icons"
import Login from "./components/login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={IntroPage}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/login" component={Login}></Route>
          <Icons/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
