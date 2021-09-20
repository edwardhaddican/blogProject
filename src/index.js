import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Posts } from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const { data } = await axios.get(
        "http://clever-neumann-583.herokuapp.com/posts",
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ5MGZmMDQzYjA0YTAwMDQ5ZjZmN2MiLCJpYXQiOjE2MzIxNzgxNjl9.1jzB2hPJ4K23MDBWLlEK0g0dYt4iUbAZmHw1M7wJgno",
          },
        }
      );

      setAllPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Header />
      <Posts allPosts={allPosts} />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
