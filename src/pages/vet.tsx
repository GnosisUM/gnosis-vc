import CardComponent from "./components/CardComponent";
const data = {
    company: "Company Name",
    founder: "Founder Name",
    desc: "Description",
    aiRate: "8.7",
    aiRateDesc: "Excellent",
};

const similarComps = [
    {
        company: "Grab",
        img: "/img/grab.png",
    },
    {
        company: "Gojek",
        img: "/img/gojek.jpg",
    },
    {
        company: "Uber",
        img: "/img/uber.png",
    },
];

const vet = () => {
    return (
        <>            
            <div className="flex h-screen gap-8 columns-3">
                <a
                    href="#"
                    className="container flex items-center justify-center bg-red-200 rounded-r-lg"
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
                <div className="container py-10">
                    <CardComponent data={data} similarComps={similarComps} />
                </div>
                <a
                    href="#"
                    className="container flex items-center justify-center bg-green-200 rounded-l-lg"
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
