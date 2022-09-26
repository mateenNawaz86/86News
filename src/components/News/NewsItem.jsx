import React, { Component } from "react";
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    // getting props here
    let { title, description, imgUrl, newsUrl, author, date } = this.props;

    // get date with GMT
    let newDate = new Date(date).toUTCString();
    return (
      <>
        <section className="news">
          <div className="container">
            <article className="news_item">
              <div className="news__img">
                <img
                  src={
                    !imgUrl
                      ? "https://cdn.cnn.com/cnnnext/dam/assets/220909122405-apple-iphone-14-0907-super-tease.jpg"
                      : imgUrl
                  }
                  alt="SEO Solution"
                />
              </div>

              <div className="news__info">
                <h5>{title}</h5>
                <small id="date">
                  By {author === null ? "Mike Miller" : author} on {newDate}
                </small>
                <p>
                  {description
                    ? description
                    : "Even the heavy rainfall couldn't erase the smell of death in the pine forest in"}
                </p>
                <a
                  href={newsUrl}
                  className="btn btn-sm btn-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default NewsItem;
