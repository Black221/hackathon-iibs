import { Routes, Route } from "react-router";
import Layout from "./Layout";

import PresencePage from "./presence/Page";
import PointagePage from "./comming/Page";


export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<PointagePage />} />
                <Route path="/presence/*" element={<PointagePage />} />
                <Route path="/pointage/*" element={<PresencePage />} />

            </Route>

        </Routes>
    </>)
}