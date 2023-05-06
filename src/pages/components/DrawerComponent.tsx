import React, { useEffect, useState } from "react";

const DrawerComponent = ({ slideIn, handleSlideIn, data }: any) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      console.log("Hi");
      setLoading(false);
      
      handleSlideIn();
      setToast(true)
      handleToast()
    }, 2000);


    
  };
  const handleToast = () =>{
    setTimeout(() => {
      console.log('Toast TIMEOUTE')
      setToast(false)
    }, 4000);
  }
  useEffect(()=>{

  },[toast])
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
          <div className="relative w-32 h-32 m-auto overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute text-gray-400 w-34 h-36 -left-2"
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

        <dl className="max-w-md pb-4 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Founder
            </dt>
            <dd className="text-sm font-semibold">{data?.founder}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Email
            </dt>
            <dd className="text-sm font-semibold">{data?.email}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Contact Number
            </dt>
            <dd className="text-sm font-semibold">{data?.contact}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Location
            </dt>
            <dd className="text-sm font-semibold">{data?.location}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Date
            </dt>
            <dd className="text-sm font-semibold">{data?.date}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Industry
            </dt>
            <dd className="text-sm font-semibold">{data?.industry}</dd>
          </div>
          <div className="flex flex-col pt-3 pb-3">
            <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
              Description
            </dt>
            <dd className="text-sm font-semibold">{data?.description}</dd>
          </div>
        </dl>

        <button
          type="button"
          className="m-auto text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleLoading}
        >
          Request Pitch Deck
        </button>
      </div>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full "
        hidden={!slideIn}
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        onClick={handleSlideIn}
      ></div>

      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 items-center justify-center w-full h-full none"
        hidden={!loading}
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: loading ? "flex" : "none",
        }}
      >
        <div className="relative w-56 h-56 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="toast-success"
        className="items-center w-full max-w-xs p-4 mb-4 text-gray-800 rounded-lg shadow toast bg-gray-50 dark:text-gray-400"
        role="alert"
        style={{display:!toast?'none':'flex', bottom:'12px', left:'12px',position:'fixed'}}
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Email sent successfully.</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-slate-200 text-gray-600 rounded-lg p-1.5  inline-flex h-8 w-8 "
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
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
        </button>
      </div>
    </>
  );
};

export default DrawerComponent;
