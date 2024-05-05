import { useState } from "react";
import Button from "../../../components/Button";
import { Table } from "../../../components/Table";
import { USER_COLUMS_NOTIFICATIONS, USER_DATA_NOTIFICATIONS, sort } from "../../../data/dummy";
import Input from "../../../components/Input";
import { Data } from "../../../types/Table";
import useModal from "../../../hooks/useModal";



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


    const DATA  = [
        {
            prenom: "Adama",
            nom: "Sow",
            telephone: "78 178 77 93"
        },
        {
            prenom: "Babacar",
            nom: "Sec",
            telephone: "77 137 48 59"
        },
        {
            prenom: "Abdoulaye",
            nom: "Ndiaye",
            telephone: "78 184 46 79"
        }
    ]

    const COLUMNS = [
        {
            label: "prenom",
            sort : sort
        },
        {
            label: "nom",
            sort : sort
        },
        {
            label: "telephone",
            sort : sort
        }
    ]

    const mes = 
`Chers étudiants,
Merci de régler vos mensualités pour ce trimestre avant la date limite. Cela garantit le bon fonctionnement de nos services. Si vous avez des difficultés financières ou des questions, contactez-nous.
    `

    const {setModalElement, setModalOpen, onClose} = useModal();

    return (<>

        <div className="flex gap-5 flex-col">
            <Input type="text" label="Objet" onChange={setObjet} placeholder="Mentualité" className=""/>
            <textarea value={mes} className="w-full h-32 border-2 border-gray-200 rounded-md p-2" placeholder="Message">
            </textarea>
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
            {active === 0 && <Table label="Liste des Etudiants" columns={COLUMNS} data={DATA as Data[]} actions={ACTIONS}  />}
            {active === 1 && <Table label="Liste des Parents" columns={USER_COLUMS_NOTIFICATIONS} data={USER_DATA_NOTIFICATIONS as Data[]} actions={ACTIONS}  />}
            {active === 2 && <Table label="Liste des Enseignants" columns={USER_COLUMS_NOTIFICATIONS} data={USER_DATA_NOTIFICATIONS as Data[]} actions={ACTIONS} />}
            

            <Button  onClick={
                () => {
                    setModalElement(<div className="flex flex-col gap-2 p-10">
                        <h1 className="text-2xl font-bold">Message</h1>
                        <div>
                            <p><span className="font-bold">Objet</span>: {"Mensualité"}</p>
                            <p className="w-80"><span className="font-bold">Message:</span> {"Chers étudiants, Merci de régler vos mensualités pour ce trimestre avant la date limite. Cela garantit le bon fonctionnement de nos services. Si vous avez des difficultés financières ou des questions, contactez-nous."}</p>
                        </div>
                        <div className="flex items-center justify-end space-x-4">
                            <Button label="Envoyer" onClick={() => {
                                setModalElement(<>
                                    <div className="flex flex-col gap-2 p-10">
                                        <h1 className="text-2xl font-bold">Message</h1>
                                        <p>Message envoyé avec succès</p>
                                        <Button label="Fermer" onClick={onClose} className="w-32 bg-blue-500 text-white hover:bg-blue-500/80 transition-all duration-300"/>
                                    </div>
                                </>)
                            }} className="w-32 bg-blue-500 text-white hover:bg-blue-500/80 transition-all duration-300"/>
                            <Button label="Annuler" onClick={onClose} className="w-32 bg-red-500 text-white hover:bg-red-500/80 transition-all duration-300"/>
                        </div>
                    </div>)
                    setModalOpen(true)
                }
            
            } label="Envoyer" className="w-32 bg-blue-500 text-white hover:bg-blue-500/80 transition-all duration-300"/>
        </div>
    </>)
}