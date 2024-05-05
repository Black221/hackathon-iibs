import { Routes, Route } from "react-router";
import Layout from "./Layout";

import HomePage from "./home/Page";
import FormationPage from "./formation/Page";
import CalendarPage from "./calendar/Page";
import BibliPage from "./biblio/Page";
import Pointage from "./pointing/Page";
import ProfilPage from "./profil/Page";
import OfferPage from "./offer/Page";

export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<HomePage />} />
                <Route path="/offre/*" element={<OfferPage />} />
                <Route path="/dashboard/*" element={<FormationPage />} />
                <Route path="/edt" element={<CalendarPage />} />
                <Route path="/biblio/*" element={<BibliPage />} />
                <Route path="/pointage" element={<Pointage />} />
                <Route path="/profil/*" element={<ProfilPage />} />
            </Route>

        </Routes>
    </>)
}