import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";

/* axios interceptors are fired for every request 
sent throughtout the application and can be used to 
set headers in the application
*/

// interceptor for sending requests
// Can be used for internet connectivity errors
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // must return the request or you will recieve errors
    return request;
  },
  (error) => {
    // Error handling can be used for a log file
    console.log(error);
    // pass the error unto the component which handles it
    return Promise.reject(error);
  }
);

// interceptor for handling responses
// usued when there is an error with the response
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // must return the response or you will recieve errors
    return response;
  },
  (error) => {
    // Error handling can be used for a log file
    console.log(error);
    // pass the error unto the component which handles it
    return Promise.reject(error);
  }
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
