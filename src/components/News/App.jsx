import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  // function for handling the top loadingBar
  setProgress = (prog) => {
    this.setState({ progress: prog });
  };

  render() {
    return (
      <>
        <LoadingBar color="#FF1493" progress={this.state.progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                changeProgress={this.setProgress}
                key="general"
                pageSize={12}
                category="general"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                changeProgress={this.setProgress}
                key="general"
                pageSize={12}
                category="general"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                changeProgress={this.setProgress}
                key="entertainment"
                pageSize={12}
                category="entertainment"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                changeProgress={this.setProgress}
                key="business"
                pageSize={12}
                category="business"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                changeProgress={this.setProgress}
                key="health"
                pageSize={12}
                category="health"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                changeProgress={this.setProgress}
                key="science"
                pageSize={12}
                category="science"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                changeProgress={this.setProgress}
                key="sports"
                pageSize={12}
                category="sports"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                changeProgress={this.setProgress}
                key="technology"
                pageSize={12}
                category="technology"
                country="us"
              />
            }
          />
        </Routes>
      </>
    );
  }
}
