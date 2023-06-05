import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={2000} preventDuplicate maxSnack={1}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
