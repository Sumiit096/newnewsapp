import React, { Component } from "react";
//import noimage from "./noimage.png";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={urlToImage ? urlToImage : ""}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
              <span class="badge bg-secondary">New</span>
            </p>
            <a
              href={url}
              className="btn  btn-primary bg-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            <p class="card-text">
              <small class="text-muted">
                By{author ? author : "Unknown"}on {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
