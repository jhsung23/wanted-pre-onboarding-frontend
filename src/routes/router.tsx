import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { getTodos } from '@/apis/todo/todo';
import { ProtectedRoute } from '@/components/helper';
import { MainPage, NotFoundPage, SignInPage, SignUpPage, TodoPage } from '@/pages';
import { todoCreateAction, todoDeleteAction, todoUpdateAction } from '@/routes/action/todoAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
      {
        path: 'todo',
        loader: getTodos,
        element: (
          <ProtectedRoute>
            <TodoPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'create',
            action: todoCreateAction,
          },
          {
            path: 'delete',
            action: todoDeleteAction,
          },
          {
            path: 'update',
            action: todoUpdateAction,
          },
        ],
      },
    ],
  },
]);

export default router;
