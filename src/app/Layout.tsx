import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { AdminSidebar } from "../data/sidebar";
import Header from './../components/Header';
import { Breadcrumb } from "../components/Breadcumb";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

export default function Layout() {

    const location = useLocation();


    const getLinks = (path: string) => {

        let ref = ''
        const tab = path.split('/')
        tab.shift();
        return tab.map((link) => {
            ref = ref + link + '/'
            return { label: link, icon: "", href: ref}
        })
    }

    const { modalElement, modalOpen, onClose } = useModal();


    return (<>

        <Modal children={modalElement} open={modalOpen} onClose={onClose} />

        <main className="overflow-y-hidden">
            <div className={"flex overflow-y-hidden"}>

                <Sidebar {...AdminSidebar} />

                <div className={"flex-1 relative  overflow-y-hidden h-screen"}>

                    <Header />

                    <div className="h-[calc(100%-64px)] overflow-y-auto p-10 space-y-4">
                        <Breadcrumb link={getLinks(location.pathname)} />
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    </>)
}