import React from "react";
// SWITCH: THIS IS NEW TO US:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
        {/* WE WANT NAV OUTSIDE OF THE SWITCH BC WE WANT IT ALL THE TIME REGARDLESS OF WHERE THE REST OF THE ROUTES ARE */}
        <Nav />
        {/* NOW WE ADD SWITCH FROM SWITCH, WHICH WE IMPORTED */}
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          {/* this is a single route that matches anything left over */}
          {/* DON'T SPECIFY A PATH */}
          <Route component={NoMatch} />

        </Switch>
      </>
    </Router>
  );
}

export default App;
