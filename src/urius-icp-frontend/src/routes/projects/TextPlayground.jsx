import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import React from "react";
import CollaborativeTextEditor from "../../components/CollaborativeTextEditor";
import { IoMdCopy } from "react-icons/io";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
// import "../../styles/globals.css";
// import "../../styles/text-editor.css";

const TextPlayground = () => {
  return (
    <RoomProvider
        id={localStorage.getItem("textProjectId")}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-slate-900 text-xl font-semibold text-md">
                Text Editor /
              </h2>
              <input
                className="py-0 bg-transparent rounded-md w-content"
                type="text"
                defaultValue="main.txt"
              />
            </div>

            <button className="bg-slate-700 text-gray-100 p-1 px-3 rounded-md">
              Save
            </button>
          </div>
          <div className="flex flex-row space-x-1 items-center">
            <p className="text-gray-400">
              id: <span>{localStorage.getItem("textProjectId")}</span>
            </p>
            <IoMdCopy className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <CollaborativeTextEditor />
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default TextPlayground;
