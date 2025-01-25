import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {BrowserRouter as Router} from "react-router"
import "./style.css"

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    fetchOptions: {
      timeout: 10000, // Set a timeout (10 seconds)
    },
  }),
  cache: new InMemoryCache(),
  credentials: "include",
  headers: {
    Authorization: `test`, // Add token if needed
  },
  credentials: "include"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
  </Router>
);
