import Timetable from "../../../components/Timetable";



export default function ViewTimetable() {

    // complete with maths francais histoire geo anglais physique chimie svt de manière aléatoire
    const TIMETABLE_DATA = [
        {
            day: 0,
            start: "8:00",
            end: "10:00",
            course: "Math"
        },
        {
            day: 0,
            start: "10:00",
            end: "12:00",
            course: "Francais"
        },
        {
            day: 0,
            start: "14:00",
            end: "16:00",
            course: "Histoire"
        },
        {
            day: 0,
            start: "16:00",
            end: "18:00",
            course: "Geo"
        },
        {
            day: 1,
            start: "8:00",
            end: "10:00",
            course: "Anglais"
        },
        {
            day: 1,
            start: "10:00",
            end: "12:00",
            course: "Physique"
        },
        {
            day: 1,
            start: "14:00",
            end: "16:00",
            course: "Chimie"
        },
        {
            day: 1,
            start: "16:00",
            end: "18:00",
            course: "SVT"
        },
        {
            day: 2,
            start: "8:00",
            end: "10:00",
            course: "Math"
        },
        {
            day: 2,
            start: "10:00",
            end: "12:00",
            course: "Francais"
        },
        {
            day: 2,
            start: "14:00",
            end: "16:00",
            course: "Histoire"
        },
        {
            day: 2,
            start: "16:00",
            end: "18:00",
            course: "Geo"
        },
        {
            day: 3,
            start: "8:00",
            end: "10:00",
            course: "Anglais"
        },
        {
            day: 3,
            start: "10:00",
            end: "12:00",
            course: "Physique"
        },
        {
            day: 3,
            start: "14:00",
            end: "16:00",
            course: "Chimie"
        },
        {
            day: 3,
            start: "16:00",
            end: "18:00",
            course: "SVT"
        },
        {
            day: 4,
            start: "8:00",
            end: "10:00",
            course: "Math"
        },
        {
            day: 4,
            start: "10:00",
            end: "12:00",
            course: "Francais"
        },
        {
            day: 4,
            start: "14:00",
            end: "16:00",
            course: "Histoire"
        },
        {
            day: 4,
            start: "16:00",
            end: "18:00",
            course: "Geo"
        },
        {
            day: 5,
            start: "8:00",
            end: "10:00",
            course: "Anglais"
        },
        {
            day: 5,
            start: "10:00",
            end: "12:00",
            course: "Physique"
        },
        {
            day: 5,
            start: "14:00",
            end: "16:00",
            course: "Chimie"
        },
    ]

    return (<>
        <Timetable data={TIMETABLE_DATA} start="" end="" />
    </>)
}