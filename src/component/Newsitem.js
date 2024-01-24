import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
            </p>
            <a href={url} className="btn  btn-primary" target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
