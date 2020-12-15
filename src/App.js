import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
