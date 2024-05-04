import { Table } from "../../../components/Table";
import { USER_COLUMS, USER_DATA } from "../../../data/dummy";

function ListFormation() {


	return (<>
        
        <div className="w-full">
            <Table label="List of Formations" columns={USER_COLUMS} data={USER_DATA} actions={[]} />
        </div>
    
    </>)
}

export default ListFormation;
