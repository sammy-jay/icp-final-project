import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";

import LandingPage from "./routes/LandingPage";
import DashboardPage from "./routes/dashboard/DashboardPage";
import SignIn from "./routes/auth/SignIn";
import SignUp from "./routes/auth/SignUp";
import CodePlayground from './routes/projects/CodePlayground';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/auth/sign-in",
      element: <SignIn />,
    },
    {
      path: "/auth/sign-up",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);

  return (
    <main className="w-full">
      <LiveblocksProvider
        publicApiKey={
          "pk_dev_dMOdAw6fhtNCeg4PQbB64uQ0j1DdbSpJKb01Fqj7Ze42nfk-MxCfph2SknAhmGmE"
        }
      >
        <RouterProvider router={router} />
      </LiveblocksProvider>
    </main>
  );
}

export default App;
