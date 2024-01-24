import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6caaa1a568c34f00952c43c8446560f0";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h3>NewsMonkey - Top Healines</h3>
        <div className="row my-3">
          {this.state.articles.map((item) => {
            return (
              <div className="col-md-4">
                <Newsitem
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  url={item.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
