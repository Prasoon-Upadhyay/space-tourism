 
import HomePage from "./pages/HomePage/HomePage";
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DestinationPage from "./pages/DestinationsPage/DestinationPage";
import CrewPage from "./pages/CrewPage/CrewPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";



const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/destinations',
      element: <DestinationPage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/crew',
      element: <CrewPage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/tech',
      element: <TechnologyPage />,
      errorElement: <ErrorPage />
    }

  ])

  return (
    <div className="main-container"   > 
      <RouterProvider  router={router}/> 
    </div>
  )
}

export default App;