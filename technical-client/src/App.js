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
