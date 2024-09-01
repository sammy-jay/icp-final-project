import React, { useState, useEffect } from "react";
import { urius_icp_backend } from "declarations/urius-icp-backend";
import { Link } from "react-router-dom";
import {
  MdAddBox,
  MdDashboard,
  MdInsertComment,
  MdSettings,
  MdLogout,
  MdOutlineViewKanban,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaCode, FaChalkboard } from "react-icons/fa";
import { BiLogoMicrosoftTeams, BiSpreadsheet } from "react-icons/bi";
import { IoMdAdd, IoMdNotifications } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import CodePlayground from "../projects/CodePlayground";
import { generateRandom } from "../../utils";
import TextPlayground from "../projects/TextPlayground";
import { Excalidraw } from "@excalidraw/excalidraw";

import {
  CallingState,
  StreamTheme,
  CallControls,
  SpeakerLayout,
  useCallStateHooks,
  ParticipantView,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import WhiteboardPlayground from "../projects/WhiteboardPlayground";
import SpreadsheetPlayground from "../projects/SpreadsheetPlayground";
export const MyParticipantList = (props) => {
  const { participants } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      {participants.map((participant) => (
        <ParticipantView
          participant={participant}
          key={participant.sessionId}
        />
      ))}
    </div>
  );
};

export const MyFloatingLocalParticipant = (props) => {
  const { participant } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        width: "240px",
        height: "135px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
      }}
    >
      <ParticipantView participant={participant} />
    </div>
  );
};

const DashboardPage = () => {
  const [section, setSection] = useState("dashboard");
  const [projectType, setProjectType] = useState("");

  // const { useCallCallingState, useLocalParticipant, useRemoteParticipants } =
  //   useCallStateHooks();

  // const callingState = useCallCallingState();
  // const localParticipant = useLocalParticipant();
  // const remoteParticipants = useRemoteParticipants();

  // if (callingState !== CallingState.JOINED) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main className="max-w-[1300px] lg:mx-auto bg-gray-50 mx-8">
      <nav className="flex full  mt-8 rounded-md drop-shadow-md flex-row justify-between items-center bg-gray-100 py-2 px-4">
        <div className="flex flex-row items-center gap-2">
          <img
            alt="Urius"
            src="assets/urius-logo.png"
            className="h-[36px] w-[36px]"
          />
          <h2 className="text-2xl font-semibold font-mono tracking-normal">
            SyncSpace HQ
          </h2>
        </div>
        <div className="flex flex-row gap-0 items-center">
          <RxAvatar className="sidebar-icon text-slate-700" />
          <p className="text-md text-gray-700 tracking-wide">
            {localStorage.getItem("username")}
          </p>
        </div>
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
            } ${section == "new-code-playground" && "bg-gray-300 rounded-md"} ${
              section == "new-text-playground" && "bg-gray-300 rounded-md"
            }  ${
              section == "new-whiteboard-playground" && "bg-gray-300 rounded-md"
            }  ${
              section == "new-spreadsheet-playground" &&
              "bg-gray-300 rounded-md"
            } ${section == "join-project" && "bg-gray-300 rounded-md"}`}
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
        <div
          className={`px-8 pr-0  w-full h-[70vh] ${
            section === "new-whiteboard-playground" && "h-[65vh]"
          }`}
        >
          {section === "dashboard" && (
            <DashboardComponent setSection={setSection} />
          )}
          {section === "projects" && (
            <ProjectComponent
              setSection={setSection}
              setProjectType={setProjectType}
            />
          )}
          {section === "new-code-playground" && <CodePlayground />}
          {section === "new-text-playground" && <TextPlayground />}
          {section === "new-whiteboard-playground" && <WhiteboardPlayground />}
          {section === "new-spreadsheet-playground" && (
            <SpreadsheetPlayground />
          )}
          {section === "join-project" && (
            <JoinProject setSection={setSection} projectType={projectType} />
          )}
        </div>

        {/* {section === "new-code-playground" && (
          <div className="w-[400px]">
            <StreamTheme>
              <SpeakerLayout participantsBarPosition="bottom" />
              <CallControls className="w-[250px]" />
            </StreamTheme>
          </div>
        )}
        {section === "new-text-playground" && (
          <div className="w-[400px]">
            <StreamTheme>
              <SpeakerLayout participantsBarPosition="bottom" />
              <CallControls className="w-[250px]" />
            </StreamTheme>
          </div>
        )} */}
      </section>
    </main>
  );
};

const DashboardComponent = ({ setSection }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleContinue = (projectId, projectType) => {
    console.log(projectId, projectType);

    if (projectType == "codeEditor") {
      localStorage.setItem("projectId", projectId);
      setSection("new-code-playground");
    } else if (projectType == "textEditor") {
      localStorage.setItem("textProjectId", projectId);
      setSection("new-text-playground");
    } else if (projectType == "whiteboard") {
      // localStorage.setItem("textProjectId", projectId);
      setSection("new-whiteboard-playground");
    } else if (projectType == "spreadsheet") {
      // localStorage.setItem("textProjectId", projectId);
      setSection("new-spreadsheet-playground");
    }
  };

  useEffect(() => {
    urius_icp_backend
      .getProjectByUsername(localStorage.getItem("username"))
      .then((projects) => setProjects(projects));

    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="w-full p-4 rounded-md bg-gray-100">
        <h2 className="text-slate-800 font-semibold text-2xl">Dashboard</h2>
        <h2 className="text-gray-400 font-light text-md">
          View all your collaborations.
        </h2>
      </div>
      {isLoading && (
        <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
          <h2 className="text-[32px] text-slate-600 font-light">Loading...</h2>
        </div>
      )}
      {!isLoading && projects.length > 0 ? (
        <div className="scrollbar w-full overflow-y-scroll h-[60vh] flex flex-wrap justify-center lg:justify-start flex-row gap-4 py-4">
          {/* Cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[250px] h-[150px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-between items-start gap-1 cursor-pointer transition-all duration-300 hover:border-slate-600"
            >
              <div className="flex flex-row justify-start items-center gap-2">
                {project.projectType == "whiteboard" && (
                  <FaChalkboard className="w-[28px] h-[28px] text-gray-400" />
                )}
                {project.projectType == "textEditor" && (
                  <IoDocumentAttachOutline className="w-[28px] h-[28px] text-gray-400" />
                )}
                {project.projectType == "codeEditor" && (
                  <FaCode className="w-[28px] h-[28px] text-gray-400" />
                )}
                {project.projectType == "spreadsheet" && (
                  <BiSpreadsheet className="w-[28px] h-[28px] text-gray-400" />
                )}
                <h2 className="text-slate-600 text-md font-medium">
                  {project.name}
                </h2>
              </div>
              <p className="text-gray-400">
                id: <span>{project.id}</span>
              </p>
              <div className="flex flex-row gap-2 justify-end w-full">
                <button
                  onClick={() =>
                    handleContinue(project.id, project.projectType)
                  }
                  className="py-2 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
                >
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
          <h2 className="text-[32px] text-slate-600 font-light">
            You have no projects yet
          </h2>
          <button
            onClick={() => setSection("projects")}
            className="bg-slate-700 text-gray-100 rounded-md py-2 px-3 cursor-pointer"
          >
            Create New Project
          </button>
        </div>
      )}
    </>
  );
};

const ProjectComponent = ({ setSection, setProjectType }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNewWhiteboard = (type) => {
    setIsLoading(true);
    const projectId = generateRandom(8);
    const name = generateRandom(6);
    urius_icp_backend
      .createProject(projectId, name, localStorage.getItem("username"), type)
      .then((value) => {
        if (value !== "") {
          setIsLoading(false);
          setSection("new-whiteboard-playground");
        } else {
          console.log("Something went wrong");
          setIsLoading(false);
        }
      });
  };

  const handleNewProject = (type) => {
    setIsLoading(true);
    const projectId = generateRandom(8);
    const name = generateRandom(6);
    urius_icp_backend
      .createProject(projectId, name, localStorage.getItem("username"), type)
      .then((value) => {
        if (value !== "") {
          setIsLoading(false);
          if (type == "codeEditor") {
            localStorage.setItem("projectId", value);
            setSection("new-code-playground");
          } else if (type == "textEditor") {
            localStorage.setItem("textProjectId", value);
            setSection("new-text-playground");
          } else if (type == "spreadsheet") {
            setSection("new-spreadsheet-playground");
          }
        } else {
          console.log("Something went wrong");
          setIsLoading(false);
        }
      });
    // generate project-id
    // call the backend and store the data
  };

  const handleJoinProject = (projectType) => {
    setSection("join-project");
    setProjectType(projectType);
    // localStorage.setItem("projectId", value);
    // setSection("new-code-playground");
  };

  return (
    <>
      <div className="w-full p-4 rounded-md bg-gray-100">
        <h2 className="text-slate-800 font-semibold text-2xl">Projects</h2>
        <h2 className="text-gray-400 font-light text-md">
          Create a new collaboration
        </h2>
      </div>
      <div className="scrollbar w-full overflow-y-scroll max-h-[60vh] flex flex-wrap justify-center lg:justify-start flex-row gap-4 py-4">
        {/* Cards */}
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:border-slate-600">
          <FaChalkboard className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">Whiteboard</h2>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleNewWhiteboard("whiteboard")}
              className="py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
            >
              New
            </button>
            <button
              onClick={() => handleJoinProject("whiteboard")}
              className="py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md"
            >
              Join
            </button>
          </div>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:border-slate-600">
          <IoDocumentAttachOutline className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-4">
            Text Editor
          </h2>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleNewProject("textEditor")}
              className="py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
            >
              New
            </button>
            <button
              onClick={() => handleJoinProject("textEditor")}
              className="py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md"
            >
              Join
            </button>
          </div>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:border-slate-600">
          <FaCode className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-4">
            Code Editor
          </h2>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleNewProject("codeEditor")}
              className="py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
            >
              New
            </button>
            <button
              onClick={() => handleJoinProject("codeEditor")}
              className="py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md"
            >
              Join
            </button>
          </div>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:border-slate-600">
          <BiSpreadsheet className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">
            Spreadsheet
          </h2>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleNewProject("spreadsheet")}
              className="py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
            >
              New
            </button>
            <button
              onClick={() => handleJoinProject("spreadsheet")}
              className="py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md"
            >
              Join
            </button>
          </div>
        </div>
        <div className="h-[250px] w-[250px] p-4 rounded-md border-[2px] border-gray-100 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:border-slate-600">
          <MdOutlineViewKanban className="w-[30px] h-[30px] text-gray-400" />
          <h2 className="text-slate-600 text-lg font-light mt-8">Kanban</h2>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleNewProject("kanban")}
              className="py-1 px-4 text-sm text-gray-200 bg-slate-700 rounded-md"
            >
              New
            </button>
            <button
              onClick={() => handleJoinProject("kanban")}
              className="py-1 px-4 text-sm bg-gray-200 text-slate-700 rounded-md"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const JoinProject = ({ setSection, projectType }) => {
  const [form, setForm] = useState({ projectId: "" });

  const handleClick = () => {
    if (projectType == "codeEditor") {
      localStorage.setItem("projectId", form.projectId);
      setSection("new-code-playground");
    } else if (projectType == "textEditor") {
      localStorage.setItem("textProjectId", form.projectId);
      setSection("new-text-playground");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full p-4 rounded-md bg-gray-100">
        <h2 className="text-slate-800 font-semibold text-2xl">Projects</h2>
        <h2 className="text-gray-400 font-light text-md">
          Join a collaboration
        </h2>
      </div>
      <div className="max-w-[400px] mt-12 mx-auto max-h-[60vh] flex flex-wrap justify-center lg:justify-start flex-col gap-0 py-4">
        {/* Cards */}
        <label
          htmlFor="projectId"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Project Id
        </label>
        <div className="mt-2">
          <input
            id="projectId"
            name="projectId"
            type="text"
            value={form.projectId}
            onChange={(e) => handleChange(e)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="mt-4 flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
