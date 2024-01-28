import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavBar />
          </div>

          <Routes>
            {" "}
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={8}
                  country="us"
                  categories="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={8}
                  country="us"
                  categories="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={8}
                  country="us"
                  categories="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={8}
                  country="us"
                  categories="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={8}
                  country="us"
                  categories="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={8}
                  country="us"
                  categories="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={8}
                  country="us"
                  categories="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={8}
                  country="us"
                  categories="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
