import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer/FooterComponent";


const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col h-[100vh] space-y-5">
                <Outlet></Outlet>
                <footer className="mt-auto bg-[#111010]">
                    <FooterComponent></FooterComponent>
                </footer>
            </div>
        </>
    );
};

export default MainLayout;