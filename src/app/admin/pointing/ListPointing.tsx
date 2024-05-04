import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";

export default function ListPoint() {

    
    return (<>
        
        <div className="w-10/12 mx-auto">
            <Table label="List of Students" columns={USER_COLUMS} data={USER_DATA} actions={[]} />
        </div>
    
    </>)
}