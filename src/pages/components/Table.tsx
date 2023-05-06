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
            <div className="relative overflow-x-auto rounded-lg shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <caption className="p-5 text-lg font-semibold text-left text-white bg-blue-700">
                        New Startups
                        <p className="mt-1 text-sm font-normal text-white">
                            Browse a list of new Startups gathered all around
                            the world. Click on each entry to get more details.
                        </p>
                    </caption>
                    <thead className="text-gray-700 uppercase bg-gray-200 text-md">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Founder
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Venture
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Industry
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b cursor-pointer hover:bg-gray-50"
                                onClick={() => {
                                    handleSlideIn();
                                    setCurrentData(index);
                                }}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
                                >
                                    {item.founder}
                                </th>
                                <td className="px-6 py-4">{item.company}</td>
                                <td className="px-6 py-4">{item.industry}</td>
                                <td className="px-6 py-4">{item.date}</td>
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
