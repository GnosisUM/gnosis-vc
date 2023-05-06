import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    
    return (
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between p-4 border-b-2 border-gray-300">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8 mr-3"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Flowbite
                    </span>
                </a>
                <div className="flex items-center">
                    <div className="flex items-center justify-between order-1 w-auto">
                        <ul className="flex flex-row p-0 mt-0 space-x-8 font-medium bg-white border-0 rounded-lg">
                            <li>
                                <a
                                    href="/source"
                                    className={
                                        router.asPath
                                            .toString()
                                            .includes("source")
                                            ? "block p-0 text-lg text-blue-700 bg-transparent bg-blue-700 rounded"
                                            : "block p-0 text-lg text-gray-900 rounded hover:bg-transparent hover:text-blue-700"
                                    }
                                >
                                    Source
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/vet"
                                    className={
                                        router.asPath.toString().includes("vet")
                                            ? "block p-0 text-lg text-blue-700 bg-transparent bg-blue-700 rounded"
                                            : "block p-0 text-lg text-gray-900 rounded hover:bg-transparent hover:text-blue-700"
                                    }
                                    aria-current="page"
                                >
                                    Vet
                                </a>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="flex mr-0 text-sm bg-gray-800 rounded-full"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="user photo"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
