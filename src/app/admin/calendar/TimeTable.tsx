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
        },
        {
            id: 2,
            level: "2",
            start: "10/10/2016",
            end: "10/8/2017",
        },
        {
            id: 3,
            level: "3",
            start: "10/10/2017",
            end: "10/8/2018",
        },
        {
            id: 4,
            level: "4",
            start: "10/10/2018",
            end: "10/8/2019",
        },
        {
            id: 5,
            level: "5",
            start: "10/10/2019",
            end: "10/8/2020",
        },
        {
            id: 6,
            level: "6",
            start: "10/10/2020",
            end: "10/8/2021",
        },
        {
            id: 7,
            level: "7",
            start: "10/10/2021",
            end: "10/8/2022",
        },
        {
            id: 8,
            level: "8",
            start: "10/10/2022",
            end: "10/8/2023",
        },
        {
            id: 9,
            level: "9",
            start: "10/10/2023",
            end: "10/8/2024",
        },
        {
            id: 10,
            level: "10",
            start: "10/10/2024",
            end: "10/8/2025",
        },
        {
            id: 11,
            level: "11",
            start: "10/10/2025",
            end: "10/8/2026",
        },
        {
            id: 12,
            level: "12",
            start: "10/10/2026",
            end: "10/8/2027",
        },
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