import ReactDOM from "react-dom/client";
import { Controller as AppController } from "./app";
import { Provider } from "react-redux";
import configureAppStore from "./store";
import api from "./api";
import axios from "axios";
import application from "./resources/configs/application";
import { BrowserRouter } from "react-router-dom";
import "./resources/css/index.css";

const store = configureAppStore(api);
axios.defaults.baseURL = application.backend;
export type State = ReturnType<typeof store.getState>;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppController.Root />
    </Provider>
  </BrowserRouter>
);
