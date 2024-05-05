import { useState } from "react";
import Button from "../../../components/Button";
import { Table } from "../../../components/Table";
import { USER_COLUMS_NOTIFICATIONS, USER_DATA_NOTIFICATIONS } from "../../../data/dummy";
import Input from "../../../components/Input";
import { Data } from "../../../types/Table";



export default function NewNotification() {

    const [active, setActive] = useState<number>(0);
    const [, setQuery] = useState<string>("");
    const [, setObjet] = useState("");


    const ACTIONS = [
        {
            element: <button>Voir</button>,
            ref: "name",
            onClick: (data: string | number) => {
                setQuery(prev => prev + "&" + data);
            },
        },
    ];


    return (<>

        <div className="flex gap-5 flex-col">
            <Input type="text" label="Objet" onChange={setObjet} className=""/>
            <textarea className="w-full h-32 border-2 border-gray-200 rounded-md p-2" placeholder="Message"></textarea>
            <div className="w-full flex items-center justify-end space-x-4">
                <Button label="Etudiant" onClick={() => {
                    setActive(0)
                    setQuery("")
                }} className={`${active === 0 ? "bg-blue-500 text-white" : "white"}`} />
                <Button label="Parent" onClick={() => {
                    setActive(1)
                    setQuery("")
                }} className={`${active === 1 ? "bg-blue-500 text-white" : "white"}`} />
                <Button label="Enseignant" onClick={() => {
                    setActive(2)
                    setQuery("")
                }} className={`${active === 2 ? "bg-blue-500 text-white" : "white"}`} />
                
            </div>
            {active === 0 && <Table label="Liste des Etudiants" columns={USER_COLUMS_NOTIFICATIONS} data={USER_DATA_NOTIFICATIONS as Data[]} actions={ACTIONS}  />}
            {active === 1 && <Table label="Liste des Parents" columns={USER_COLUMS_NOTIFICATIONS} data={USER_DATA_NOTIFICATIONS as Data[]} actions={ACTIONS}  />}
            {active === 2 && <Table label="Liste des Enseignants" columns={USER_COLUMS_NOTIFICATIONS} data={USER_DATA_NOTIFICATIONS as Data[]} actions={ACTIONS} />}
            

            <Button label="Envoyer" className="w-32 bg-blue-500 text-white hover:bg-blue-500/80 transition-all duration-300"/>
        </div>
    </>)
}