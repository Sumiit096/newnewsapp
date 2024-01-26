import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>

        <News pageSize={8} country={"us"} categories={"Technology"} />
      </div>
    );
  }
}

export default App;
