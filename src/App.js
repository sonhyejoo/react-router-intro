import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className="comp">
        <ul>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/stocks"
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/not-logged-in">
          <h1>You must be logged in to enter.</h1>
        </Route>
        <Route path="/">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
