import { createAction } from "@reduxjs/toolkit";

const makeActions =
  (prfix: string) =>
  <T>(type: string) =>
    createAction<T>(`${prfix}/${type}`);
