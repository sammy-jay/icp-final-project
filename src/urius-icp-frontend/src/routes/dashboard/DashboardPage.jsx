import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
  MdAddBox,
  MdDashboard,
  MdInsertComment,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaCode, FaChalkboard } from "react-icons/fa";
import { BiLogoMicrosoftTeams, BiSpreadsheet } from "react-icons/bi";
import { IoMdAdd, IoMdNotifications } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import CodePlayground from '../projects/CodePlayground';


const DashboardPage = () => {
  const [section, setSection] = useState("dashboard")

  return (
    <main className="max-w-[1000px] lg:mx-auto bg-gray-50 mx-8">
      <nav className="flex full  mt-8 rounded-md drop-shadow-md flex-row justify-between items-center bg-gray-100 py-2 px-4">
        <h2 className="text-2xl font-semibold font-mono tracking-wider">
          URIUS
        </h2>
        <RxAvatar className='sidebar-icon text-slate-700'/>
        
      </nav>

      {/* Sidebar */}
      <section className="mt-8 w-full flex flex-row gap-4">
        <div className=" min-h-[80vh] w-[60px] items-center drop-shadow-md rounded-md bg-gray-100 pt-8 flex flex-col gap-4 gap-y-6 p-2">
          <MdDashboard
            onClick={() => setSection("dashboard")}
            className={`sidebar-icon text-slate-700 ${
              section == "dashboard" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdAddBox
            onClick={() => setSection("projects")}
            className={`sidebar-icon text-slate-700 ${
              section == "projects" && "bg-gray-300 rounded-md"
            }`}
          />
          <BiLogoMicrosoftTeams
            onClick={() => setSection("teams")}
            className={`sidebar-icon text-slate-700 ${
              section == "teams" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdInsertComment
            onClick={() => setSection("comments")}
            className={`sidebar-icon text-slate-700 ${
              section == "comments" && "bg-gray-300 rounded-md"
            }`}
          />
          <IoMdNotifications
            onClick={() => setSection("notifications")}
            className={`sidebar-icon text-slate-700 ${
              section == "notifications" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdSettings
            onClick={() => setSection("settings")}
            className={`sidebar-icon text-slate-700 ${
              section == "settings" && "bg-gray-300 rounded-md"
            }`}
          />
          <MdLogout
            onClick={() => setSection("settings")}
            className={`sidebar-icon text-red-500 ${
              section == "logout" && "bg-red-700 rounded-md"
            }`}
          />
        </div>
        <div className="px-8 pr-0  w-full h-[70vh]">
          {section === "dashboard" && <DashboardComponent setSection={setSection}/>}
          {section === "projects" && <ProjectComponent setSection={setSection}/>}
          {section === "new-code-playground" && <CodePlayground />}
        </div>
      </section>
    </main>
  );
}


const DashboardComponent = ({setSection}) => {
  return (
    <>
    <div className="w-full p-4 rounded-md bg-gray-100">
      <h2 className="text-slate-800 font-semibold text-2xl">Dashboard</h2>
    </div>
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
        <h2 className="text-[32px] text-slate-600 font-light">
          You have no projects yet
        </h2>
        <button onClick={() => setSection("projects")} className="bg-slate-700 text-gray-100 rounded-md py-2 px-3 cursor-pointer">
          Create New Project
        </button>
      </div>
    </>
  );
}

const ProjectComponent = ({setSection}) => {
  return (
    <>
      <div className="w-full p-4 rounded-md bg-gray-100">
        <h2 className="text-slate-800 font-semibold text-2xl">Projects</h2>
        <h2 className="text-gray-400 font-light text-md">
          Create a new collaboration
        </h2>
      </div>
      <div className="w-full overflow-y-scroll max-h-[60vh] flex flex-wrap justify-start flex-row gap-4 py-4">
        {/* Cards */}
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-slate-600">
          <FaChalkboard className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">Whiteboard</h2>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-slate-600">
          <IoDocumentAttachOutline className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">
            Text Document
          </h2>
        </div>
        {/* <Link to="/projects/new/code-editor">  */}
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-slate-600" >
          <FaCode className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-4">
            Code Editor
          </h2>
          <div className='flex flex-row gap-2'>
            <button onClick={() => setSection("new-code-playground")} className='py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md'>New</button>
            <button className='py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md'>Join</button>
          </div>
        </div>
        {/* </Link> */}
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-slate-600">
          <BiSpreadsheet className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">
            Spreadsheet
          </h2>
        </div>
      </div>
    </>
  );
}

export default DashboardPage