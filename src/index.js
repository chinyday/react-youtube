import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './page/NotFound';
import VideoDetail from './page/VideoDetail';
import Viedeos from './page/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Viedeos /> },
      { path: 'videos', element: <Viedeos /> },
      { path: 'videos/:keyword', element: <Viedeos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 위에서 정의한 router를 써달라고 요청 */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
