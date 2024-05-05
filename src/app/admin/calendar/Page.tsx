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
                <Route path="/liste" element={<ListEvent/>} />
                <Route path="/ajouter-edt" element={<ManageTimetable/>} />
                <Route path="/edt/:id" element={<ViewTimetable/>} />
                <Route path="/edt" element={<TimeTable/>} />
                <Route path="/ajouter" element={<AddEvent/>} />
            </Route>

        </Routes>
    </>)
}