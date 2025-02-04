import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MovieBookingPage from './pages/MovieBookingPage';
import AdminPage from './pages/AdminPage';

function Layout() {
  return(
    <>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>FEL</div>,
    children:[
      {
        path: '/',
        element: <MovieBookingPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
