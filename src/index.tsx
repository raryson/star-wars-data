import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PeopleDetails from './Pages/PeopleDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import FilmsDetails from './Pages/FilmsDetails';
import SearchPage from './Pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />
  },
  {
    path: '/details/people/:name',
    element: <PeopleDetails />
  },
  {
    path: '/details/films/:name',
    element: <FilmsDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
