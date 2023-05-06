import React, { useEffect, useState } from "react";

const DrawerComponent = ({ slideIn, handleSlideIn, data }: any) => {
  return (
    <>
      <div
        className={
          slideIn
            ? "fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform flex flex-col bg-white w-1/3"
            : "fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform flex flex-col translate-x-full bg-white w-1/3 "
        }
      >
       <div className="fuxed">
       <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Startup Info
        </h5>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleSlideIn}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <span className="sr-only">Close menu</span>
        </button>
       </div>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          {data?.product}{" "}
        </p>

        <div className="pb-4">
          <div className="m-auto relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-34 h-36 text-gray-400 -left-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 pb-4">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Founder
            </dt>
            <dd className="text-sm font-semibold">{data?.founder}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Email
            </dt>
            <dd className="text-sm font-semibold">{data?.founder}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Contact Number
            </dt>
            <dd className="text-sm font-semibold">{data?.founder}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Location
            </dt>
            <dd className="text-sm font-semibold">{data?.founder}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Date
            </dt>
            <dd className="text-sm font-semibold">{data?.date}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Industry
            </dt>
            <dd className="text-sm font-semibold">{data?.industry}</dd>
          </div>
          <div className="flex flex-col pb-3 pt-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Description
            </dt>
            <dd className="text-sm font-semibold">{data?.description}</dd>
          </div>
        </dl>

        <button
          type="button"
          className="m-auto text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Request Pitch Deck
        </button>
      </div>
      <div
        className="w-full h-full z-10 fixed top-0 left-0 right-0 bottom-0 "
        hidden={!slideIn}
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        onClick={handleSlideIn}
      ></div>
    </>
  );
};

export default DrawerComponent;
