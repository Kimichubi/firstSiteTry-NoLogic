import { createBrowserRouter } from "react-router-dom";
import RouterHome from "./RouterHome";
import Home from "./Home/Home";
import ItemLayout from "./ItemLayout";
import Purificadores from "./Purificadores/Purificadores";
import Filtros from "./Filtros/Filtros";
import FiltroDetail from "./FiltrosDetail";
import PurificadorDetail from "./PurificadorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterHome />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "layout",
        element: <ItemLayout />,
        children: [
          {
            index: true,
            path: "products",
            element: <Purificadores />,
          },
          {
            index: true,
            path: "products/:id",
            element: <PurificadorDetail/>,
          }, {
            index: true,
            path: "filtros/:id",
            element: <FiltroDetail/>,
          },

          {
            path: "filtros",
            element: <Filtros />,
          },
        ],
      },
    ],
  },
]);
export default router;
