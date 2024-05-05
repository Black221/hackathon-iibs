import { useNavigate } from "react-router";
import { Table } from "../../../components/Table";

interface Data {
    [index: string]: string | number;
}

export default function TimeTable() {

    const navigate = useNavigate()

    const sort = (data: Data[], sens: boolean, column: string) => {
        return data.sort((a, b) => {
            if (sens) {
                return a[column] > b[column] ? 1 : -1
            } else {
                return a[column] < b[column] ? 1 : -1
            }
        })
    }

    const TIME_TABLE_COLUMNS = [
        {
            label: "level",
            sort: sort
        },
        {
            label: "start",
            sort: sort
        },
        {
            label: "end",
            sort: sort
        }
    ]

    const TIME_TABLE_DATA = [
        {
            id: 1,
            level: "1",
            start: "10/10/2015",
            end: "10/8/2016",
        }
    ]

    const TIME_TABLE_ACTIONS = [
        {
            element: <button>View</button>,
            ref: "id",
            onClick: (data: string | number) => {
                navigate(""+data)
            }
        },
        {
            element: <button>Edit</button>,
            ref: "id",
            onClick: () => { }
        }
    ]

    return (<>
        
        <Table data={TIME_TABLE_DATA} label="TimeTable" columns={TIME_TABLE_COLUMNS} actions={TIME_TABLE_ACTIONS} search={true} />
    
    </>)
}