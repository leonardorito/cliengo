import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
					<Route path="*" render={() => <Redirect to="/" />} />
        </MainLayout>
      </Switch>
    </Router>
  );
};

export default App;
