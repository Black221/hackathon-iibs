import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";


export default function ListStudents() {


    return (<>
        
        <div className="w-full">
            <Table label="Liste des etudiants" columns={USER_COLUMS} data={USER_DATA} actions={[]} />
        </div>
    
    </>)
}