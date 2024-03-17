import { createBrowserRouter } from "react-router-dom";
import Feed from "../components/Feed/Feed";
import MainLayouts from "../layouts/MainLayouts";
import Watch from "../components/Watch/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);
export default router;
