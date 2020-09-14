import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Shelf from "./pages/Shelf"
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    /*
    For example if I were to type in /shelf into the url, I would go to that exact page,
    as opposed to displaying both home page and shelf page.
*/
// We return react router so we can use the <Switch>
    <Router>
      <div>
        <Nav />

        {/* If I were to type in /shelf into the url, I would go to that exact page,
        as opposed to displaying both home page and shelf page. */}
        <Switch>

          {/* I can route the exact paths by using a regular expression
          which accepts the array [] of paths. 
          */}
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path={["/shelf", "/books"]}>
            <Shelf />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
