import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Footer from "../components/Footer";
import { AdminSidebar } from "../data/sidebar";
import Header from './../components/Header';

export default function Layout() {


    
    
    return (<>
        <main className="overflow-y-hidden">
            <div className={"flex overflow-y-hidden"}>
                <Sidebar {...AdminSidebar} />

                <div className={"flex-1 -z-10"}>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </main>
    </>)
}