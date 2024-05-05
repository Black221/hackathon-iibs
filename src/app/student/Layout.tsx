import { useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Icon from "../../components/Icon";
import { Breadcrumb } from "../../components/Breadcumb";


/* document le code */

/** 
 * Component Layout
 * 
 * affiche le layout de l'etudiant
 * gere le header et le sidebar
*/


export default function Layout () {

    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)

    // verify that the click is outside the ref
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node) && ref2.current && !ref2.current.contains(e.target as Node)) {
            setOpen(false)
        }
    }

    document.addEventListener("click", handleClick)

    const location = useLocation();

    return(<>
        <main className="w-full h-screen flex flex-col">

            {open && <div ref={ref} className="bg-white w-full fixed top-16 left-0 shadow-lg z-50">
                <nav className="flex flex-col items-center justify-center gap-0.5">
                    <Link href="/etudiant" icon="fa-solid fa-home" label="Accueil" callback={setOpen} />
                    <Link href="/etudiant/dashboard" icon="fa-solid fa-dashboard" label="Dashboard" callback={setOpen} />
                    <Link href="/etudiant/edt" icon="fa-solid fa-calendar" label="Emploi du temps" callback={setOpen} />
                    <Link href="/etudiant/bibli" icon="fa-solid fa-book" label="Bibliothèque" callback={setOpen} />
                    <Link href="/etudiant/profil" icon="fa-solid fa-user" label="Profil" callback={setOpen} />
                </nav>
            </div>}

            <div>
                <div ref={ref2} className="w-full h-16 flex flex-col justify-center px-6 shadow border-b bg-white ">
                    <div className="">
                        <div className="flex items-center justify-between px-2">

                            <Icon name="fa-solid fa-bars" size={24} color="black" onClick={() => {
                                setOpen(!open)
                            }}  />

                            <div className="flex items-center justify-end space-x-4">
                                <div className="min-w-fit">John Doe</div>
                                <div className="w-10 h-10 flex items-center">
                                    <img
                                        src="https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg"
                                        className="w-auto rounded-full bg-cover"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="p-2">
                    <Breadcrumb link={[{
                        icon: <Icon name="home" size={24} onClick={() => {}} color="black" />,
                        label: location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "Accueil",
                        href: "/"
                    }]} />
                    <Outlet />
                </div>
            </div>
        </main>
    </>)
}

interface LinkProps {
    href: string;
    icon: string;
    label: string;
    callback: (data: boolean) => void;
}

const Link = (props : LinkProps) => {

    return (<>
        <a href={props.href} className="w-full p-4 py-3 text-base text-white flex items-center bg-blue-900 capitalize">
            <Icon name={props.icon} size={24} color="white" onClick={() => {
                props.callback(!open)
            }}  />
            <span className="ml-4">{props.label}</span>
        </a>
    </>)
}