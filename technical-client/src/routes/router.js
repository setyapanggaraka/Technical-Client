import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../view/Login";
import Welcome from "../view/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      let access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/home");
      }
      return access_token;
    },
  },
  {
    path: "home",
    element: <Welcome />,
    loader: () => {
      let loggedIn = localStorage.getItem("access_token");
      if (!loggedIn) {
        return redirect("/");
      }
      return loggedIn;
    },
  },
]);

export default router;
