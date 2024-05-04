import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListEvent from "./ListEvent";
import ManageTimeTable from "./ManageTimeTable";
import TimeTable from "./TimeTable";
import AddEvent from "./AddEvent";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div ><ListEvent/></div>} />
                <Route path="/list" element={<div ><ListEvent/></div>} />
                <Route path="/manage" element={<div ><ManageTimeTable/></div>} />
                <Route path="/timetable" element={<div ><TimeTable/></div>} />
                <Route path="/add" element={<div ><AddEvent/></div>} />
            </Route>

        </Routes>
    </>)
}