import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import { ProtectedRoute } from '@/components/helper';
import { SignInPage, SignUpPage } from '@/pages/auth';
import TodoPage from '@/pages/todo/TodoPage';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
      {
        path: 'todo',
        element: (
          <ProtectedRoute>
            <TodoPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
