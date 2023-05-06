import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">{children}</div>
        </>
    );
};

export default Layout;
