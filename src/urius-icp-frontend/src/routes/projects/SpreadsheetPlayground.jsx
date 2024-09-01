import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";


import { IoMdCopy } from "react-icons/io";


const license = {
  clientId: "134c0b3b267df918319e6ec823c789cf712888be",
  licenseKey:
    "ZTkzYjdjZWE5ODFmN2MyODkwOTdiYTI3NzYwOWVhOTlhMWNhN2NjZDk0YmNjZjc1YWY0MjZlNjZhOGE1ZDM5ZTRlYmU4MDZmZDk0MmQwNjM0NWUwMTgzNTYyOTNkMzIwMmE5MThjM2YyODhmYjlhNGJlYWJjMzZkYzU2Njc0YWUsZXlKamJHbGxiblJKWkNJNklqRXpOR013WWpOaU1qWTNaR1k1TVRnek1UbGxObVZqT0RJell6YzRPV05tTnpFeU9EZzRZbVVpTENKdVlXMWxJam9pVkc5c2RXeHZjR1VpTENKa1lYUmxJam94TnpJM056TTNNakF3TENKa2IyMWhhVzRpT2xzaUttZHBkSEJ2WkM1cGJ5SXNJbXh2WTJGc2FHOXpkQ0lzSWpNd01EQXRaMmwwY0c5a1pHVnRiM010YzNCeWFXNW5jR1YwWTJ3dGJERmpiVFpzYUdSdE9Ya3VkM010WlhVeE1UVXVaMmwwY0c5a0xtbHZJaXdpZDJWaUlpd2liRzlqWVd4b2IzTjBJbDBzSW5Cc1lXNGlPak14TENKelkyOXdaU0k2V3lKMk55SXNJblk0SWl3aWRqa2lMQ0oyTVRBaUxDSjJNVEVpTENKbWIzSnRkV3hoSWl3aVptOXliWE1pTENKeVpXNWtaWElpTENKd1lYSnpaWElpTENKcGJYQnZjblJsY2lJc0luTmxZWEpqYUNJc0ltTnZiVzFsYm5Seklpd2lkbUZzYVdSaGRHbHZibk1pTENKamFHRnlkSE1pTENKd2NtbHVkQ0lzSW1KaGNpSXNJbk5vWldWMGN5SXNJbk5vWVhCbGN5SXNJbk5sY25abGNpSmRmUT09",
};

jspreadsheet.setLicense(license);

const SpreadsheetPlayground = () => {
  const spreadsheet = useRef();

  return (
    <div className="h-full">
      <div className="w-full p-4 rounded-md bg-gray-100 mb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-slate-900 text-xl font-semibold text-md">
              Spreadsheet /
            </h2>
            <input
              className="py-0 bg-transparent rounded-md w-content"
              type="text"
              defaultValue="main.xlsx"
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

      <Spreadsheet ref={spreadsheet}  tabs={true} toolbar={true}>
        <Worksheet />
      </Spreadsheet>
    </div>
  );
};

export default SpreadsheetPlayground;
