import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importer toutes les pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import RentalProfil, { rentalLoader } from "./pages/Rental.js";
import Error from "./pages/Error.js";


function Router () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "rentals/:id",
      element: <RentalProfil />,
      loader: rentalLoader,
      id: "accommodation",
      errorElement: <Error />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "error",
      element: <Error />
    },
    {
      path: "*",
      element: <Error />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;
