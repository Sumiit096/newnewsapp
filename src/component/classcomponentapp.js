//import React, { Component } from "react";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "6caaa1a568c34f00952c43c8446560f0";

  const [progress, setProgress] = useState(0);
  //state = {
  //   progress: 0,
  // };
  const setProg = (progress) => {
    setProgress({ progress: progress });
  };

  return (
    <Router>
      <div>
        <div>
          <LoadingBar color="#f11946" progress={progress} />
          <NavBar />
        </div>

        <Routes>
          {" "}
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
                setProgress={setProg}
                apiKey={apiKey}
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
};

export default App;
