import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import FrequentAnswer from "./containers/FrequentAnswer/FrequentAnswer";

const App = () => {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route exact path="/">
            <FrequentAnswer />
          </Route>
        </MainLayout>
      </Switch>
    </Router>
  );
};

export default App;
