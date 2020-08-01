import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import FrequentAnswer from "./containers/FrequentAnswer/FrequentAnswer";
import { FrequentAnswerContext } from "./providers/FrequentAnswerProvider";

const App = () => {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route exact path="/">
            <FrequentAnswerContext>
              <FrequentAnswer />
            </FrequentAnswerContext>
          </Route>
          <Route path="*" render={() => <Redirect to="/" />} />
        </MainLayout>
      </Switch>
    </Router>
  );
};

export default App;
