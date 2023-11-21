import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import { Api } from "./api";

const configureAppStore = (api: Api) =>
  configureStore({
    reducer: {

    },
    middleware: middleware.map((m) => m(api)),
  });
export default configureAppStore;
