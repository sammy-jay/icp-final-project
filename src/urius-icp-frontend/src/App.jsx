import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";

import LandingPage from "./routes/LandingPage";
import DashboardPage from "./routes/dashboard/DashboardPage";
import SignIn from "./routes/auth/SignIn";
import SignUp from "./routes/auth/SignUp";
import CodePlayground from './routes/projects/CodePlayground';

import {
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { generateRandom } from './utils';

// const apiKey = "am4zg25pgs4a";
// const token =
//   "ccz33rxg8dfjcgftpgvkvh2zq7jceewzqwumkrsakmdrn3mh6urqtq2zm33cdtss";
// const userId = generateRandom(6);
// const callId = generateRandom(12);

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiS3lsZV9LYXRhcm4iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0t5bGVfS2F0YXJuIiwiaWF0IjoxNzI1MDg3MDc5LCJleHAiOjE3MjU2OTE4ODR9.JeQzXkbu-hhw7Yw_gB88Yt3RAi1UCr6M0d_3pT4J8Vk";
const userId = "Kyle_Katarn";
const callId = "xOsPrZDcDS1X";


const user = {
  id: userId,
  name: localStorage.getItem("username"),
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });

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
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <LiveblocksProvider
            publicApiKey={
              "pk_dev_dMOdAw6fhtNCeg4PQbB64uQ0j1DdbSpJKb01Fqj7Ze42nfk-MxCfph2SknAhmGmE"
            }
          >
            <RouterProvider router={router} />
          </LiveblocksProvider>
        </StreamCall>
      </StreamVideo>
    </main>
  );
}

export default App;
