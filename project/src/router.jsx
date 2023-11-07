import { createBrowserRouter } from "react-router-dom";
import RouterHome from "./RouterHome";
import Home from "./Home/Home";

import ItemLayout from "./ItemLayout";

import Ultramax from "./Purificadores/produtos-items/Ultramax";
import Giom from "./Purificadores/produtos-items/Giom";
import TorneiraPopPreta from "./Purificadores/produtos-items/TorneiraPopPreta";
import AS2 from "./Purificadores/produtos-items/AS2";
import Facile from "./Purificadores/produtos-items/Facile";
import TorneiraPopBranca from "./Purificadores/produtos-items/TorneiraPopBranca";
import FiltroBlist5 from "./Purificadores/produtos-items/FiltroBlist5";
import Declorador from "./Purificadores/produtos-items/Declorador";
import Purificadores from "./Purificadores/Purificadores";
import Filtros from "./Filtros/Filtros";
import FacileC3 from "./Filtros/produtos-filtros/FacileC3";
import FacileC7 from "./Filtros/produtos-filtros/FacileC7";
import CarbonBlock7 from "./Filtros/produtos-filtros/CarbonBlock7";
import CarbonBlock9 from "./Filtros/produtos-filtros/CarbonBlock9";
import RefilHfCsl from "./Filtros/produtos-filtros/RefilHfCsl";
import RefilHfElx10 from "./Filtros/produtos-filtros/RefilHfElx10";
import RefilHfElx20 from "./Filtros/produtos-filtros/RefilHfElx20";
import RefilHfElx30 from "./Filtros/produtos-filtros/RefilHfElx30";

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
            path: "filtros",
            element: <Filtros />,
          },
        ],
      },
      {
        path: "ultramax",
        element: <Ultramax />,
      },
      {
        path: "giom",
        element: <Giom />,
      },
      {
        path: "torneira-pop-preta",
        element: <TorneiraPopPreta />,
      },
      {
        path: "AS2",
        element: <AS2 />,
      },
      {
        path: "facilec3",
        element: <FacileC3 />,
      },
      {
        path: "facilec7",
        element: <FacileC7 />,
      },
      {
        path: "carbonblock7",
        element: <CarbonBlock7 />,
      },
      {
        path: "carbonblock9",
        element: <CarbonBlock9 />,
      },
      {
        path: "refilhfcsl",
        element: <RefilHfCsl />,
      },
      {
        path: "refilhfelx10",
        element: <RefilHfElx10 />,
      },
      {
        path: "refilhfelx20",
        element: <RefilHfElx20 />,
      },
      {
        path: "refilhfelx30",
        element: <RefilHfElx30 />,
      },
      {
        path: "facile",
        element: <Facile />,
      },
      {
        path: "torneira-pop-branca",
        element: <TorneiraPopBranca />,
      },
      {
        path: "filtro-blist",
        element: <FiltroBlist5 />,
      },
      {
        path: "declorador",
        element: <Declorador />,
      },
    ],
  },
]);
export default router;
