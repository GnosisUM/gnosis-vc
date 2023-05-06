import CardComponent from "./components/CardComponent";
import { useEffect, useState } from "react";
import "animate.css";

const vet = () => {
    const [data, setData] = useState([
        {
            company: "TechBuddy",
            founder: "Sarah Johnson",
            desc: "A platform that connects individuals and businesses with experienced and knowledgeable tech experts.",
            aiRate: 8.7,
            status: "default",
            similarComps: [
                {
                    company: "Nuclino",
                    img: "/img/nuclino.png",
                },
                {
                    company: "Confluence",
                    img: "/img/confluence.png",
                },
                {
                    company: "Papyrs",
                    img: "/img/papyrs.png",
                },
            ],
            attr: [
                {
                    type: "First Funding Round Year",
                    value: "2018",
                },
                {
                    type: "Established Year",
                    value: "2017",
                },
                {
                    type: "VC/Angel",
                    value: "1337 Ventures",
                },
                {
                    type: "Total Fundings",
                    value: "RM5000000",
                },
            ],
        },
        {
            company: "GreenEats",
            founder: "Alex Chen",
            desc: "An innovative food delivery service that focuses on promoting sustainable and environmentally friendly practices.",
            aiRate: 4.3,
            status: "default",
            similarComps: [
                {
                    company: "FoodPanda",
                    img: "/img/foodpanda.png",
                },
                {
                    company: "GrabFood",
                    img: "/img/grabfood.png",
                },
                {
                    company: "ShopeeFood",
                    img: "/img/shopeefood.png",
                },
            ],
            attr: [
                {
                    type: "First Funding Round Year",
                    value: "2022",
                },
                {
                    type: "Established Year",
                    value: "2017",
                },
                {
                    type: "VC/Angel",
                    value: "Cradle Fund Sdn Bhd",
                },
                {
                    type: "Total Fundings",
                    value: "RM700000",
                },
            ],
        },
        {
            company: "MindfulMinutes",
            founder: "Emily Davis",
            desc: "A meditation and wellness app designed to help individuals lead more balanced and mindful lives.",
            aiRate: "7.2",
            status: "default",
            similarComps: [
                {
                    company: "Headspace",
                    img: "/img/headspace.jpg",
                },
                {
                    company: "Calm",
                    img: "/img/calm.png",
                },
                {
                    company: "Healthy Minds",
                    img: "/img/healthy.png",
                },
            ],
            attr: [
                {
                    type: "First Funding Round Year",
                    value: "2021",
                },
                {
                    type: "Established Year",
                    value: "2021",
                },
                {
                    type: "VC/Angel",
                    value: "Gobi Partners",
                },
                {
                    type: "Total Fundings",
                    value: "RM300000",
                },
            ],
        },
    ]);
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("In effect", data);
    }, [data, num]);

    const handleAccept = () => {
        setNum(num + 1);
        data[data.length - 1].status = "accepted";
        setTimeout(() => {
            setNum(num + 2);
            data.pop();
        }, 800);
        setData(data);
    };
    const handleReject = () => {
        setNum(num + 1);
        data[data.length - 1].status = "rejected";
        setTimeout(() => {
            setNum(num + 2);
            data.pop();
        }, 800);
        setData(data);
    };

    return (
        <>
            <div className="flex gap-8 h-[calc(100vh-65.6px)] columns-3">
                <a
                    href="#"
                    className={`container flex items-center justify-center bg-red-200 rounded-l-lg ${
                        data.length == 0 && "pointer-events-none"
                    }`}
                    onClick={handleReject}
                >
                    <svg
                        className="w-24 h-24 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </a>
                <div className="container grid place-items-center place-content-center">
                    {data.map((item) => (
                        <div
                            className={`container py-10 child-card ${
                                item.status == "accepted" &&
                                "animate__animated animate__fadeOutRight"
                            } ${
                                item.status == "rejected" &&
                                "animate__animated animate__fadeOutLeft"
                            }`}
                        >
                            <CardComponent data={item} />
                        </div>
                    ))}
                    {data.length == 0 && (
                        <div className="container flex items-center justify-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            No more ventures available!
                        </h5>
                        </div>

                    )}
                </div>
                <a
                    href="#"
                    className={`container flex items-center justify-center bg-green-200 rounded-l-lg ${
                        data.length == 0 && "pointer-events-none"
                    }`}
                    onClick={handleAccept}
                >
                    <svg
                        className="w-24 h-24 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                    </svg>
                </a>
            </div>
        </>
    );
};

export default vet;
