import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // defaultProps if component didn't get props from another component
  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "general",
  };

  // defaultProps data types
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // empty array for up-comping News API articles
  articles = [];

  // Constructor used for handling the state
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      article: this.articles,
      page: 1,
      loading: true,
      totalResults: 0,
    };
  }

  // code display on the output after render code show it's output
  async componentDidMount() {
    this.props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parseData = await data.json();
    this.props.changeProgress(70);

    this.setState({
      article: this.state.article.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.changeProgress(100);
  }

  // function for controlling article loading
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parseData = await data.json();
    this.props.changeProgress(70);
    this.setState({
      article: this.state.article.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
    this.props.changeProgress(100);
  };

  render() {
    let { category } = this.props;
    let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    document.title = `86News | ${categoryName}`;

    return (
      <>
        <h2 className="text-center" id="main__heading">
          86 News - {categoryName} Top Headlines
        </h2>

        <div style={{ height: "35px" }}>
          {this.state.loading && <Spinner />}
        </div>

        <div className="container1">
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="news__container">
              {this.state.article.map((item, index) => {
                return (
                  <NewsItem
                    key={index}
                    title={item.title ? item.title.slice(0, 20) : ""}
                    description={
                      item.description ? item.description.slice(0, 80) : ""
                    }
                    imgUrl={item.urlToImage}
                    newsUrl={item.url}
                    date={item.publishedAt}
                    author={item.author}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
export default News;
