import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Main from "./components/Main";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/add" component={() => <AddNote name="Add" />} />
            <Route
              exact
              path="/edit"
              component={() => <EditNote name="Edit" />}
            />
          </Switch>
        </div>
      </Provider>
    </>
  );
};

export default App;
