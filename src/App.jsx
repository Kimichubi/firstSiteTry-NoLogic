import { RouterProvider } from "react-router-dom";
import router from "./router";
import { PurificadorShow } from "./context/PurificadorShow";
export default function App() {
  return (
    <>
      <PurificadorShow>
      <RouterProvider router={router} />
      </PurificadorShow>
    </>
  );
}
