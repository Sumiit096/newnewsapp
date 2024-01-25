import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: "",
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6caaa1a568c34f00952c43c8446560f0&page=1&pageSize=5";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  hnadleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.totalResults / 10)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
        this.state.page + 1
      }&pageSize=5`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        // totalResults: parsedData.totalResults,
      });
      console.log("next");
    }
  };
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
      this.state.page - 1
    }&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
    console.log("previous");
  };
  render() {
    return (
      <div className="container my-3">
        <h3>NewsMonkey - Top Healines</h3>
        <div className="row my-3">
          {this.state.articles.map((item) => {
            return (
              <div className="col-md-4">
                <Newsitem
                  key={item.url}
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  url={item.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-link"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            <strong> &larr;Previous </strong>
          </button>
          <button
            type="button"
            className="btn btn-link"
            onClick={this.hnadleNextClick}
          >
            <strong> Next &rarr;</strong>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
