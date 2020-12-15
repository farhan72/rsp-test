import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import LayoutContainer from "./containers/layout";
import cookies from "js-cookie";

function App() {
  console.log();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route
          exact
          path="/"
          children={() =>
            cookies.get("accessToken") ? (
              <LayoutContainer />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
