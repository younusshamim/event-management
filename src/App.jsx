import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
      <Toaster />
    </Provider>
  );
}

export default App;
