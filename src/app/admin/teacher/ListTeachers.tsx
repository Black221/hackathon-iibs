import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";

export default function ListTeachers() {

    
    return (<>
        
        <div className="w-full">
            <Table label="List of Students" columns={USER_COLUMS} data={USER_DATA} actions={[]} />
        </div>
    
    </>)
}