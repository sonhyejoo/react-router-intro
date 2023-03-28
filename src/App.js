import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/stocks">
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <comp></comp>
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
        <Route path="/">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
