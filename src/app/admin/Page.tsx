import { Routes, Route } from "react-router";
import Layout from "./Layout";

import CalendarPage from "./calendar/Page";
import FormationsPage from "./formation/Page";
import ParentsPage from "./parent/Page";
import PaymentsPage from "./payment/Page";
import PersonnelsPage from "./personnel/Page";
import PointagesPage from "./pointage/Page";
import TeachersPage from "./teacher/Page";



export default function Page () {

    return(<>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/calendar/*" element={ <CalendarPage />} />
                <Route path="/formations/*" element={ <FormationsPage />} />
                <Route path="/parents/*" element={ <ParentsPage />} />
                <Route path="/payments/*" element={ <PaymentsPage />} />
                <Route path="/personnels/*" element={ <PersonnelsPage />} />
                <Route path="/pointages/*" element={ <PointagesPage />} />
                <Route path="/teachers/*" element={ <TeachersPage />} />
            </Route>
        </Routes>
    </>)
}