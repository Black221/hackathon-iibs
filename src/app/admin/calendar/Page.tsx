import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListEvent from "./ListEvent";
import ManageTimetable from "./ManageTimetable";
import TimeTable from "./TimeTable";
import AddEvent from "./AddEvent";
import ViewTimetable from "./ViewTimetable";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListEvent/>} />
                <Route path="/list" element={<ListEvent/>} />
                <Route path="/manage" element={<ManageTimetable/>} />
                <Route path="/timetable/:id" element={<ViewTimetable/>} />
                <Route path="/timetable" element={<TimeTable/>} />
                <Route path="/add" element={<AddEvent/>} />
            </Route>

        </Routes>
    </>)
}