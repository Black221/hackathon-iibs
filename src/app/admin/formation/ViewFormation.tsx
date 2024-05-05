import { useState } from "react";
import Button from "../../../components/Button";
import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";
import { useNavigate } from "react-router";



export default function ViewFormation() {

    const [active, setActive] = useState<number>(0);
    const [query, setQuery] = useState<string>("");


    const ACTIONS = [
        {
            element: <button>Voir</button>,
            ref: "name",
            onClick: (data: string | number) => {
                setQuery(prev => prev + "&" + data);
            },
        },
    ];

    const naviagate = useNavigate();

    const getLink = (num: number) => {
        switch (num) {
            case 0:
                return "classe";
            case 1:
                return "ue";
            case 2:
                return "matiere";
            case 3:
                return "evaluation";    
            default:
                return "classe";
        }
    }
    

    return (<>
        <div className="w-full flex items-center justify-end space-x-4">
            <Button label="Classe" onClick={() => {
                setActive(0)
                setQuery("")
            }} className={`${active === 0 ? "bg-blue-500 text-white" : "white"}`} />
            <Button label="UE" onClick={() => {
                setActive(1)
                setQuery("")
            }} className={`${active === 1 ? "bg-blue-500 text-white" : "white"}`} />
            <Button label="Matiere" onClick={() => {
                setActive(2)
                setQuery("")
            }} className={`${active === 2 ? "bg-blue-500 text-white" : "white"}`} />
            <Button label="Evaluation" onClick={() => {
                setActive(3)
                setQuery("")
            }} className={`${active === 2 ? "bg-blue-500 text-white" : "white"}`} />
        </div>

        <div>
            {active === 0 && <Table label="Liste des classes" columns={USER_COLUMS} data={USER_DATA} actions={ACTIONS} add={
                <Button label="Ajouter une classes" className="ml-10" onClick={() => naviagate(getLink(0)+"?"+query)} />
            } />}
            {active === 1 && <Table label="Liste des Formations" columns={USER_COLUMS} data={USER_DATA} actions={ACTIONS} add={
                <Button label="Ajouter une UE" className="ml-10" onClick={() => naviagate(getLink(1)+"?"+query)} />
            } />}
            {active === 2 && <Table label="Liste des Matieres" columns={USER_COLUMS} data={USER_DATA} actions={ACTIONS} add={
                <Button label="Ajouter une Matiere" className="ml-10" onClick={() => naviagate(getLink(2)+"?"+query)} />
            } />}
            {active === 3 && <Table label="Liste des Evaluations" columns={USER_COLUMS} data={USER_DATA} actions={ACTIONS} add={
                <Button label="Ajouter une Evaluation" className="ml-10" onClick={() => naviagate(getLink(2)+"?"+query)} />
            } />}
        </div>
    </>)
}