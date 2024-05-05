import Button from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import Icon from "../../components/Icon";
import { Table } from "../../components/Table";
import { TicketsV3 } from "../../components/Tickets";



export default function Home () {


    const HISTORY_COLUMNS = [
        { label: "année", sort: (data: any, sens: boolean) => data.sort((a: any, b: any) => sens ? a.year - b.year : b.year - a.year) },
        { label: "formation", sort: (data: any, sens: boolean) => data.sort((a: any, b: any) => sens ? a.formation - b.formation : b.formation - a.formation) },
        { label: "etudiants", sort: (data: any, sens: boolean) => data.sort((a: any, b: any) => sens ? a.students - b.students : b.students - a.students) },
    ]

    const HISTORY_DATA = [
        { année: 2021, formation: 10, etudiants: 100 },
        { année: 2020, formation: 8, etudiants: 80 },
        { année: 2019, formation: 5, etudiants: 50 },
        { année: 2018, formation: 3, etudiants: 30 },
        { année: 2017, formation: 1, etudiants: 10 },
    ]
    return (<>
        <div className="space-y-10">
            <div className="flex flex-wrap w-full gap-2 justify-around">
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-school" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre de formations" title="Formations" data="10" smdata="+0.0%" color="green"/>
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-users" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre d'Etudiants" title="Etudiants" data="100" smdata="-10%" color="green"/>
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-chalkboard-user" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre d'Enseignants" title="Enseignants" data="10" smdata="+0.2%" color="green"/>
            </div>

            <div className="flex  w-full gap-2 justify-between">
                <div className="flex-1">
                    <Table label="Historique" data={HISTORY_DATA} columns={HISTORY_COLUMNS} actions={[]} search={false} />
                </div>
                <div>
                    <h1 className="text-start font-bold text-2xl px-6">Evenements</h1>
                    <Calendar getDate={() => {}} dateToColor={[]} />
                    <div className="text-xl px-6 flex items-center justify-between">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <div className="text-gray-600">2021-10-10</div>
                            <div className="text-gray-900">Evenement 1</div>
                        </div>
                        <div>
                            <Button label="Details" onClick={() => {}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}