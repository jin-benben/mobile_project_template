import { lazy } from "react";
import { createBrowserRouter} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      Component: lazy(() => import("../pages/home")),
      children: [
        {
          path: "b",
          Component:lazy(() => import('../pages/b')),
        },
        {
          path: "a",
          Component:lazy(() => import('../pages/a')),
        },
      ],
    },
  ]);

  export default router