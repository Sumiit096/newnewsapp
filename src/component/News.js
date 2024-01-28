import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
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
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  async componentDidMount() {
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
  }

  hnadleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.categories
    //   }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //     //totalResults: parsedData.totalResults,
    //   });
    //   console.log("next");
    // }
  };
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.categories
    // }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ page: this.state.page - 1, articles: parsedData.articles });
    // console.log("previous");
  };
  render() {
    return (
      <div className="container my-4">
        <h2> Top Healines</h2>
        {this.state.loading && <Spinner />}
        <div className="row my-5">
          {!this.state.loading &&
            this.state.articles.map((item) => {
              return (
                <div className="col-md-4">
                  <Newsitem
                    key={item.url}
                    title={item.title}
                    description={item.description}
                    urlToImage={item.urlToImage}
                    url={item.url}
                    author={item.author}
                    date={item.publishedAt}
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
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
            }
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
