import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import LayoutContainer from "./containers/layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/home" component={LayoutContainer} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
