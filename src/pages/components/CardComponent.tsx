const CardComponent = ({ data }: any) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-5">
                <div className="flex items-center mb-5">
                    <p
                        className={`text-gray-900 ${
                            data?.aiRate >= 8.0 ? "bg-green-100" : "bg-red-100"
                        } text-sm font-semibold inline-flex items-center p-1.5 rounded`}
                    >
                        {data?.aiRate}
                    </p>
                    <p className="ml-2 font-medium text-gray-900 ">
                        {data?.aiRate >= 8.0 ? "Excellent" : "Unsuitable"}
                    </p>
                </div>
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-700 ">
                        {data?.company}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 ">
                        {data?.founder}
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-700 ">
                        {data?.desc}
                    </p>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-0" />

                {data?.attr.map((item:any) => (
                    <div className="flex justify-between mt-4">
                        <span className="text-sm font-medium text-gray-900">
                            {item.type}
                        </span>
                        <span className="text-sm font-medium text-blue-700">
                            {item.value}
                        </span>
                    </div>
                ))}

                <hr className="h-px my-6 bg-gray-200 border-0" />

                <div className="flex items-center justify-between mb-4">
                    <h5 className="font-bold leading-none text-gray-900 text-md dark:text-white">
                        Similar in the industry
                    </h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="flex justify-between">
                        {data?.similarComps.map((item:any) => (
                            <li className="float-left py-3">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="w-10 h-10 border-2 border-gray-300 rounded-full"
                                            src={item.img}
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate text-md dark:text-white">
                                            {item.company}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
