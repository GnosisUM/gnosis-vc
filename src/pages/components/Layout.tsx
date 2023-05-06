import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="">{children}</div>
        </>
    );
};

export default Layout;
