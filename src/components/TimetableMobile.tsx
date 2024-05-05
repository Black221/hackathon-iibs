import Select from "./Select";


interface Props {
    data : Data[];
}
interface Data {
    course: string;
    day: string;
    start: string;
    end: string;
}

export default function TimetableMobile (props:Props) {

    const DAYS = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ]

    const HOURS = [
        "8:00",  "10:00", "12:00",  "14:00", "16:00", "18:00", "20:00"
    ]


    return(<>
        <div className="px-4 space-y-4">
            <Select options={DAYS} onChange={() => {}} label="" />
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Heures</th>
                        <th className="px-4 py-2">Cours</th>
                    </tr>
                </thead>
                <tbody>
                    {HOURS.map((h) => {
                        return <tr className="border border-gray-100">
                            <td className="px-4 py-2">{h}</td>
                            <td className="px-4 py-2">
                                {props.data.filter((d: Data) => d.start == h).map((d: Data) => {
                                    return <div className="text-sm">{d.course}</div>
                                })}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>)
}