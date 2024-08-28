import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './routes/LandingPage';
import DashboardPage from './routes/dashboard/DashboardPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);

  return (
    <main className="w-full">
     
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
