import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import BlogDetails from './Components/BlogDetails';
import Blogs from './Components/Blogs';
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


// const client = new ApolloClient({
//   uri:"http://localhost:1337/graphql",
//   caches: new InMemoryCache(),
// })

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/login",
        element: <Login/> ,
      },
          {
            path: "/",
            element: <Blogs />,
          },
          {
            path: "/blogs/:id",
            element: <BlogDetails />,
          },
  
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ApolloProvider client={client} >
    <React.StrictMode>
      <RouterProvider router={router} />
      
    </React.StrictMode>

  // </ApolloProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
