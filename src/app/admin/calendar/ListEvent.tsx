import Button from "../../../components/Button";
import { Table } from "../../../components/Table";


interface Data {
    [index: string]: string | number;
}


export default function ListEvent() {

    const sort = (data: Data[], sens: boolean, column: string) => {
        return data.sort((a, b) => {
            if (a[column] < b[column]) return sens ? -1 : 1;
            if (a[column] > b[column]) return sens ? 1 : -1;
            return 0;
        })
    }

    const EVENT_COLUMNS = [
        {
            label: "title",
            sort: sort
        },
        {
            label: "date",
            sort: sort
        },
        {
            label: "description",
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

    const EVENT_DATA = [
        {
            title: "Event 1",
            date: "2021-10-10",
            description: "Description 1",
            start: "10:00",
            end: "12:00"
        },
        {
            title: "Event 120",
            date: "2021-10-11",
            description: "Description 2",
            start: "10:00",
            end: "12:00"
        },
        {
            title: "Event 3",
            date: "2021-10-12",
            description: "Description 30",
            start: "10:00",
            end: "12:00"
        },
        {
            title: "Event 402",
            date: "2021-10-13",
            description: "Description 4",
            start: "10:00",
            end: "12:00"
        },
        {
            title: "Event 50",
            date: "2021-10-14",
            description: "Description 5",
            start: "10:00",
            end: "12:00"
        }
    ]

    const EVENT_ACTIONS = [
        { 
            element: <Button label="Modify" />,
            ref: "edit",
            onClick: () => {}
        }
    ]
    return (<>
        
        <Table  label="Liste des Evenements" data={EVENT_DATA} columns={EVENT_COLUMNS} actions={EVENT_ACTIONS} />
    
    </>)
}