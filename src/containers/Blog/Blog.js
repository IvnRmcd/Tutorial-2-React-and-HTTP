import React, { Component } from "react";
import {Route, Switch, NavLink, BrowserRouter as Router} from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <Router>
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-post',
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
        <Route exact path="/" component={Posts}/>
        <Route  path="/new-post" component={NewPost}/>
        <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Blog;
