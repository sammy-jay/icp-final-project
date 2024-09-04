import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { IoMdCopy } from 'react-icons/io';

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const MindMapPlayground = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-full pb-4">
      <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-slate-900 text-xl font-semibold text-md">
              Mind Map /
            </h2>
            <input
              className="py-0 bg-transparent rounded-md w-content"
              type="text"
              defaultValue="main.json"
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

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default MindMapPlayground;
