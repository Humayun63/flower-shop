import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer/FooterComponent";


const MainLayout = () => {
    return (
        <>
            <main className="flex flex-col h-[100vh]">
                <Outlet></Outlet>
                <footer className="mt-auto bg-[#111010]">
                    <FooterComponent></FooterComponent>
                </footer>
            </main>
        </>
    );
};

export default MainLayout;