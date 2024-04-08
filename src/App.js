import Main from "./Main";
import Catalog from "./Catalog";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Product from "./Product";
import Authorization from "./Authorization";
import About from "./About";
import LogIn from "./LogIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/enter",
    element: <LogIn />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;