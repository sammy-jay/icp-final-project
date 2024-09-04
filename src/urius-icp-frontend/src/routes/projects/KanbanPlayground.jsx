import React, { useState, useCallback } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoMdCopy } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

import { Board } from "../../data/board";
import { onDragEnd } from "../../utils/onDragEnd";
import AddModal from "../../components/Modals/AddModal";
import Task from "../../components/Task";

const KanbanPlayground = () => {
  const [columns, setColumns] = useState(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };
  return (
    <div className="h-full w-full pb-4">
      <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-slate-900 text-xl font-semibold text-md">
              Kanban /
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
      <div className="overflow-auto scrollbar w-[100%] h-[100%]">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="w-full scrollbar overflow-auto flex flex-row items-start justify-start px-5 pb-8 md:gap-4 gap-4">
            {Object.entries(columns).map(([columnId, column]) => (
              <div
                className="w-contain scrollbar flex flex-col gap-2 border-1 justify-start"
                key={columnId}
              >
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                    >
                      <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                        {column.name}
                      </div>
                      {column.items.map((task, index) => (
                        <Draggable
                          key={task.id.toString()}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <>
                              <Task provided={provided} task={task} />
                            </>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div
                  onClick={() => openModal(columnId)}
                  className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[290px] w-[250px] opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
                >
                  <IoAddOutline color={"#555"} />
                  Add Task
                </div>
              </div>
            ))}
            <div className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5">
              <div
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[290px] w-[250px] opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                <IoAddOutline color={"#555"} />
                Add Column
              </div>
            </div>
          </div>
        </DragDropContext>

        <AddModal
          isOpen={modalOpen}
          onClose={closeModal}
          setOpen={setModalOpen}
          handleAddTask={handleAddTask}
        />
      </div>
    </div>
  );
};

export default KanbanPlayground;
