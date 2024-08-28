import React, { useState } from 'react'
import {
  MdAddBox,
  MdDashboard,
  MdInsertComment,
  MdSettings,
} from "react-icons/md";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { IoMdAdd, IoMdNotifications } from "react-icons/io";


const DashboardPage = () => {
  const [section, setSection] = useState("dashboard")

  return (
    <main className="max-w-[1000px] mx-auto bg-gray-50">
      <nav className="flex full  mt-8 rounded-md drop-shadow-md flex-row justify-between items-center bg-gray-100 py-2 px-4">
        <h2 className="text-2xl font-semibold font-mono tracking-wider">
          URIUS
        </h2>
        <button className="bg-slate-800 text-white rounded-md py-3 px-4">
          Connect
        </button>
      </nav>

      {/* Sidebar */}
      <section className="mt-8 w-full flex flex-row gap-4">
        <div className=" min-h-[70vh] w-[60px] items-center drop-shadow-md rounded-md bg-gray-100 pt-8 flex flex-col gap-4 gap-y-6 p-2">
          <MdDashboard
            onClick={() => setSection("dashboard")}
            className={`sidebar-icon ${
              section == "dashboard" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdAddBox
            onClick={() => setSection("projects")}
            className={`sidebar-icon ${
              section == "projects" && "bg-gray-300 rounded-md"
            }`}
          />
          <BiLogoMicrosoftTeams
            onClick={() => setSection("teams")}
            className={`sidebar-icon ${
              section == "teams" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdInsertComment
            onClick={() => setSection("comments")}
            className={`sidebar-icon ${
              section == "comments" && "bg-gray-300 rounded-md"
            }`}
          />
          <IoMdNotifications
            onClick={() => setSection("notifications")}
            className={`sidebar-icon ${
              section == "notifications" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdSettings
            onClick={() => setSection("settings")}
             className={`sidebar-icon ${
              section == "settings" && "bg-gray-300 rounded-md"
            }`}
          />
        </div>
        <div className="px-4 w-full">
          {section === "dashboard" && <DashboardComponent />}
          {section === "projects" && <ProjectComponent />}
        </div>
      </section>
    </main>
  );
}


const DashboardComponent = () => {
  return (
    <>
    <div className="w-full p-4 rounded-md bg-gray-100">
      <h2 className="text-slate-800 font-semibold text-2xl">Dashboard</h2>
    </div>
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
        <h2 className="text-[36px] text-gray-600 font-light">
          You have no projects yet
        </h2>
        <button className="bg-slate-700 text-gray-100 rounded-md py-2 px-3 cursor-pointer">
          Create New Project
        </button>
      </div>
    </>
  );
}

const ProjectComponent = () => {
  return (
    <>
    <div className="w-full p-4 rounded-md bg-gray-100">
      <h2 className="text-slate-800 font-semibold text-2xl">Projects</h2>
      <h2 className="text-gray-400 font-light text-md">Create a new collaboration</h2>
      </div>
      <div className="w-full min-h-[60vh] flex flex-wrap justify-start flex-row gap-4 py-4">
        {/* Cards */}
        <div className="h-[250px] w-[250px] p-4 rounded-md drop-shadow-md bg-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer">
          <IoMdAdd className='w-20 h-20 text-gray-400'/>
          <h2 className='text-slate-800 text-2xl mt-8'>Whiteboard</h2>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md drop-shadow-md bg-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer">
          <IoMdAdd className='w-20 h-20 text-gray-400'/>
          <h2 className='text-slate-800 text-2xl mt-8'>Text Document</h2>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md drop-shadow-md bg-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer">
          <IoMdAdd className='w-20 h-20 text-gray-400'/>
          <h2 className='text-slate-800 text-2xl mt-8'>Code Editor</h2>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md drop-shadow-md bg-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer">
          <IoMdAdd className='w-20 h-20 text-gray-400'/>
          <h2 className='text-slate-800 text-2xl mt-8'>Spreadsheet</h2>
        </div>
      </div>
    </>
  );
}

export default DashboardPage