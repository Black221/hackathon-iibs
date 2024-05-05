import { useNavigate } from "react-router";
import { Table } from "../../../components/Table";
import { sort } from "../../../data/dummy";



export default function ListPayment() {
    const DATA  = [
        {
            prenom: "Adama",
            nom: "Sow",
            telephone: "78 178 77 93",
            etat : "pas en regle"
        },
        {
            prenom: "Babacar",
            nom: "Seck",
            telephone: "77 137 48 59",
            etat : "pas en regle"
        },
        {
            prenom: "Abdoulaye",
            nom: "Ndiaye",
            telephone: "78 184 46 79",
            etat : "pas en regle"
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
        },
        {
            label: "etat",
            sort : sort
        }
    ]

    const navigate = useNavigate()
    return (<>
            
        <div className="w-full">
            <Table label="Liste des Etudiants" columns={COLUMNS} data={DATA} actions={[]} add={<>
                <button onClick={
                    () => {navigate("../../notifications/envoi")}
                } className="ml-4 bg-blue-500 text-white p-2 rounded">Notifier</button>
            </>} />
        </div>
    
    </>)
}