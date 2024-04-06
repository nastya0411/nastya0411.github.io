import Main from "./Main";
import Catalog from "./Catalog";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Product from "./Product";

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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;