// import React, { Component } from "react";
// import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 5,
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//   };
//   articles = [];
//   firstUpperCase = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: this.articles,
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.firstUpperCase(
//       this.props.categories
//     )} - NewsMonkey`;
//   }
//   async updateNews() {
//     this.props.setProgress(30);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       loading: false,
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//     });
//     this.props.setProgress(100);
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       // loading: false,
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   };
//   componentDidMount() {
//     this.updateNews();
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // this.setState({
//     //   loading: false,
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     // });
//   }

//   //   hnadleNextClick = async () => {
//   //     this.setState({ page: this.state.page + 1 });
//   //     this.updateNews();
//   //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
//   //     //   let url = `https://newsapi.org/v2/top-headlines?country=${
//   //     //     this.props.country
//   //     //   }&category=${
//   //     //     this.props.categories
//   //     //   }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
//   //     //     this.state.page + 1
//   //     //   }&pageSize=${this.props.pageSize}`;
//   //     //   this.setState({ loading: true });
//   //     //   let data = await fetch(url);
//   //     //   let parsedData = await data.json();

//   //     //   this.setState({
//   //     //     page: this.state.page + 1,
//   //     //     articles: parsedData.articles,
//   //     //     loading: false,
//   //     //     //totalResults: parsedData.totalResults,
//   //     //   });
//   //     //   console.log("next");
//   //     // }
//   //   };
//   //   handlePreviousClick = async () => {
//   //     this.setState({ page: this.state.page - 1 });
//   //     this.updateNews();

//   //     // let url = `https://newsapi.org/v2/top-headlines?country=${
//   //     //   this.props.country
//   //     // }&category=${
//   //     //   this.props.categories
//   //     // }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
//   //     //   this.state.page - 1
//   //     // }&pageSize=${this.props.pageSize}`;
//   //     // let data = await fetch(url);
//   //     // let parsedData = await data.json();
//   //     // this.setState({ page: this.state.page - 1, articles: parsedData.articles });
//   //     // console.log("previous");
//   //   };
//   render() {
//     return (
//       <>
//         <h2 className="container  my-4">
//           {" "}
//           Top Healines - {this.firstUpperCase(this.props.categories)}
//         </h2>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row my-5">
//               {!this.state.loading &&
//                 this.state.articles.map((item) => {
//                   return (
//                     <div className="col-md-4" key={item.url}>
//                       <Newsitem
//                         //{...item}
//                         title={item.title}
//                         description={item.description}
//                         urlToImage={item.urlToImage}
//                         url={item.url}
//                         author={item.author}
//                         date={item.publishedAt}
//                       />
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className="d-flex justify-content-between">
//           <button
//             type="button"
//             className="btn btn-link"
//             onClick={this.handlePreviousClick}
//             disabled={this.state.page <= 1}
//           >
//             <strong> &larr;Previous </strong>
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
//             }
//             type="button"
//             className="btn btn-link"
//             onClick={this.hnadleNextClick}
//           >
//             <strong> Next &rarr;</strong>
//           </button>
//         </div> */}
//       </>
//     );
//   }
// }

// export default News;

import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const firstUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url); // axios
    let parsedData = await data.json();
    setLoading(false);
    debugger;
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    const result = updateNews();
    console.log(result);
  }, []);

  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${this.state.page}&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();

  // this.setState({
  //   loading: false,
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  // });

  //   hnadleNextClick = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews();
  //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
  //     //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     //     props.country
  //     //   }&category=${
  //     //     props.categories
  //     //   }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
  //     //     this.state.page + 1
  //     //   }&pageSize=${props.pageSize}`;
  //     //   this.setState({ loading: true });
  //     //   let data = await fetch(url);
  //     //   let parsedData = await data.json();

  //     //   this.setState({
  //     //     page: this.state.page + 1,
  //     //     articles: parsedData.articles,
  //     //     loading: false,
  //     //     //totalResults: parsedData.totalResults,
  //     //   });
  //     //   console.log("next");
  //     // }
  //   };
  //   handlePreviousClick = async () => {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();

  //     // let url = `https://newsapi.org/v2/top-headlines?country=${
  //     //   props.country
  //     // }&category=${
  //     //   props.categories
  //     // }&apiKey=6caaa1a568c34f00952c43c8446560f0&page=${
  //     //   this.state.page - 1
  //     // }&pageSize=${props.pageSize}`;
  //     // let data = await fetch(url);
  //     // let parsedData = await data.json();
  //     // this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  //     // console.log("previous");
  //   };

  return (
    <>
      <h2 className="container  my-4">
        Top Healines - {firstUpperCase(props.categories)}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-5">
            {!loading &&
              articles?.map((item) => {
                return (
                  <div className="col-md-4" key={item.url}>
                    <Newsitem
                      {...item}
                      // title={item.title}
                      // description={item.description}
                      // urlToImage={item.urlToImage}
                      // url={item.url}
                      // author={item.author}
                      // date={item.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
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
        </div> */}
    </>
  );

  News.defaultProps = {
    country: "in",
    pageSize: 5,
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
};
export default News;
