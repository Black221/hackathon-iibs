import Timetable from "../../../components/Timetable";



export default function ViewTimetable() {

    const TIMETABLE_DATA = [
        {
            day: 0,
            start: "8:00",
            end: "10:00",
            course: "Math"
        },
    ]

    return (<>
        <Timetable data={TIMETABLE_DATA} start="" end="" />
    </>)
}