"use client";

import { useState } from "react";

const SingleSerivce = () => {
  const [showPanel, setShowPanel] = useState(false);


    const services = [
        {
            serviceId: crypto.randomUUID(),
            serviceName: "",
            serviceDescription: "" 
        }
    ]



  return (
    <section className="w-full bg-[#222] border-2 p-3 shadow-lg rounded-md relative">
      <header className="mb-3 ">
        <h2 className="text-2xl font-bold">Web devlopment</h2>
        <p className="text-sm">
          You can either hire me for a specfic section or build out a full site.
        </p>
      </header>

      <button
        className="p-2 bg-[#444] rounded  absolute top-5 right-5  hover:drop-shadow-lg"
        onClick={() => setShowPanel((prev) => !prev)}
      >
        ↓
      </button>

      {showPanel && (
        <ul className="list-disc p-5 ">
          <li>
            <span className="bg-[#000] inline-block p-1 rounded-md">
              Front End development
            </span>
            <ul>
              <li>Build out the UI design of the website</li>
              <li>Help build out certain UI component</li>
            </ul>
          </li>
          <li>
            <span className="bg-[#000] inline-block p-1 rounded-md">
              Back End development
            </span>
            <ul>
              <li>Build a rest api</li>
              <li>Build out authentication setup</li>
            </ul>
          </li>
          <li>
            <span className="bg-[#000] inline-block p-1 rounded-md">
              Full stack development
            </span>
            <p>
              cover both front end and backend devlopment built towards your
              desire
            </p>
          </li>
        </ul>
      )}
    </section>
  );
};

export default SingleSerivce;
