import React, { useRef } from "react";
import { rSuiteComponents } from "@react-form-builder/components-rsuite";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";

import { IoMdCopy } from "react-icons/io";


const components = rSuiteComponents.map((c) => c.build());
const builderView = new BuilderView(components);
const FormBuilderPlayground = () => {

  return (
    <div className="h-full pb-4">
      <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-slate-900 text-xl font-semibold text-md">
              Form Builder /
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

      <FormBuilder theme="light" view={builderView} className="rounded-lg"/>
    </div>
  );
};

export default FormBuilderPlayground;
