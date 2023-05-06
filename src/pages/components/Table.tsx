import { useState } from "react";
import data from "../../data/data.js";
import DrawerComponent from "./DrawerComponent";

const Table = () => {
  const [slideIn, setSlideIn] = useState(false);
  const [currentData, setCurrentData] = useState(0);
  const handleSlideIn = () => {
    setSlideIn(!slideIn);
  };
  return (
    <>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            New Startups
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of new Startups gathered all around the world. Click on the entry to get more details.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Founder
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Industry
              </th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => {
                  handleSlideIn();
                  setCurrentData(index);
                }}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.founder}
                </th>
                <td className="px-6 py-4">{item.company}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <DrawerComponent
          handleSlideIn={handleSlideIn}
          slideIn={slideIn}
          data={data[currentData]}
        />
      </div>
    </>
  );
};

export default Table;
