import { useNavigate } from "react-router";
import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";
import { Action } from "../../../types/Table";

function ListFormation() {

    const navigate = useNavigate();

    const ACTIONS: Action[] = [
        {
            element: <button>Voir</button>,
            ref: "name",
            onClick: (data: string | number) => {
                navigate("../"+data);
            },
        },
        {
            element: <button>Modifier</button>,
            ref: "name",
            onClick: (data: string | number) => {
                navigate("../modifier/"+data);
            },
        },
        
    ];

	return (<>
        
        <div className="w-full">
            <Table label="List of Formations" columns={USER_COLUMS} data={USER_DATA} actions={ACTIONS} />
        </div>
    
    </>)
}

export default ListFormation;
