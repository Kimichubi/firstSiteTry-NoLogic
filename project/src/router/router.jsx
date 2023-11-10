import { createBrowserRouter } from "react-router-dom";
import RouterHome from "./RouterHome";
import Home from "../Home/Home";
import ItemLayout from "./ItemLayout";
import Purificadores from "../Conteudo/Purificadores";
import Filtros from "../Conteudo/Filtros";
import FiltroDetail from "../Details/FiltrosDetail";
import PurificadorDetail from "../Details/PurificadorDetail";
import Pecas from "../Conteudo/Pecas";
import PecasDetail from "../Details/PecasDetail";
import Servicos from "../Conteudo/Servicos";
import Contato from "../Conteudo/Contato";
import Visite from "../Conteudo/Visite";

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
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "visite",
        element: <Visite />,
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
            element: <PurificadorDetail />,
          },
          {
            index: true,
            path: "filtros/:id",
            element: <FiltroDetail />,
          },

          {
            path: "filtros",
            element: <Filtros />,
          },
          {
            path: "pecas",
            element: <Pecas />,
          },
          {
            path: "pecas/:id",
            element: <PecasDetail />,
          },
        ],
      },
    ],
  },
]);
export default router;
