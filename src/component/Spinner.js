import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
