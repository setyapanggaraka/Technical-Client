// import "./App.css";
import ChangeButton from "./view/ChangeButton";
import GetJson from "./view/GetJson";
import GetJsonDeleteKey from "./view/GetJsonDeleteKey";
import HashString from "./view/HashString";
import Login from "./view/Login";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import store from "./stores";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
