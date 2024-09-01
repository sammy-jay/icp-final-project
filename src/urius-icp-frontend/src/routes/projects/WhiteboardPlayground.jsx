import React, { useEffect, useState } from "react";
import { IoMdCopy } from "react-icons/io";

import {
  Excalidraw,
  LiveCollaborationTrigger,
  useHandleLibrary,
  WelcomeScreen,
} from "@excalidraw/excalidraw";
// import "../../styles/globals.css";
// import "../../styles/text-editor.css";

const WhiteboardPlayground = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  useHandleLibrary({ excalidrawAPI });

  const handleShare = () => {
    console.log(excalidrawAPI);
  };
  useEffect(() => {
    if (!excalidrawAPI) {
      return;
    }
    // Fetch image and add it to Excalidraw
  }, [excalidrawAPI]);

  return (
    <div className="h-full">
      <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-slate-900 text-xl font-semibold text-md">
              Whiteboard /
            </h2>
            <input
              className="py-0 bg-transparent rounded-md w-content"
              type="text"
              defaultValue="main.excalidraw"
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
      <Excalidraw
        ref={(api) => setExcalidrawAPI(api)}
        className="rounded-md"
        renderTopRightUI={() => (
          <button
            className="bg-slate-800 text-gray-100 rounded-md py-1 px-3"
            onClick={handleShare}
          >
            Share
          </button>
        )}
      />
    </div>
  );
};

export default WhiteboardPlayground;
