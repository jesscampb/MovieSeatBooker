import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MovieBookingPage from './pages/MovieBookingPage';

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
