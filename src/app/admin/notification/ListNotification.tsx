/* eslint-disable @typescript-eslint/no-unused-vars */
import { Table } from "../../../components/Table";
import { COLUMNS_NOTIFICATIONS, LISTNOTIFICATIONS } from "../../../data/dummy";



export default function ListNotification() {

    const ACTIONS = [
        {
            element: <button>Details</button>,
            ref: "name",
            onClick: (data: string | number) => {
                setQuery(prev => prev + "&" + data);
            },
        },
    ];


    return (<>

        <div className="flex gap-5 flex-col">
            <Table label="Liste des Notifications" columns={COLUMNS_NOTIFICATIONS} data={ LISTNOTIFICATIONS} actions={ACTIONS}  />
        </div>
    </>)
}


function setQuery(_arg0: (prev: any) => string) {
    throw new Error("Function not implemented.");
}

