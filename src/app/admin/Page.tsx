import { Routes, Route } from "react-router";
import Layout from "./Layout";

import CalendarPage from "./calendar/Page";
import FormationsPage from "./formation/Page";
import ParentsPage from "./parent/Page";
import PaymentsPage from "./payment/Page";
import PersonnelsPage from "./personnel/Page";
import PointingPage from "./pointing/Page";
import TeachersPage from "./teacher/Page";
import StudentPage from "./student/Page";
import Home from "./Home";


export default function Page () {

    return(<>
         <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/calendar/*" element={ <CalendarPage />} />
                <Route path="/formations/*" element={ <FormationsPage />} />
                <Route path="/parents/*" element={ <ParentsPage />} />
                <Route path="/payments/*" element={ <PaymentsPage />} />
                <Route path="/personnels/*" element={ <PersonnelsPage />} />
                <Route path="/pointings/*" element={ <PointingPage />} />
                <Route path="/teachers/*" element={ <TeachersPage />} />
                <Route path="/students/*" element={ <StudentPage />} />
            </Route>
        </Routes>
    </>)
}