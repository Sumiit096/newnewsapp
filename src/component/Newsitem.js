import React from "react";
//import noimage from "./noimage.png";/import React from "react";
//export class Newsitem extends Component {

const Newsitem = (props) => {
  //render() {
  let { title, description, urlToImage, url, author, date } = props;
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
            <span className="badge bg-secondary">New</span>
          </p>
          <a
            href={url}
            className="btn  btn-primary bg-dark"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
          <p className="card-text">
            <small className="text-muted">
              By{author ? author : "Unknown"}on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
//}

export default Newsitem;
