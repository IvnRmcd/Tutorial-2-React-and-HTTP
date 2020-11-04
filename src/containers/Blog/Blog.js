import React, { Component } from "react";
import {Route, Switch, Link, BrowserRouter as Router} from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <Router>
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/new-post',
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
          <Route exact path="/new-post">
          <NewPost />
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Blog;
