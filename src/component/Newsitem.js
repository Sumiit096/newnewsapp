import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={urlToImage ? urlToImage : " "}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
            </p>
            <a
              href={url}
              className="btn  btn-primary bg-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
