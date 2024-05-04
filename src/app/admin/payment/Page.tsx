import { Routes, Route } from "react-router";
import Layout from "./Layout";
import AddPayment from "./AddPayment";
import ModifyPayment from "./ModifyPayment";
import UploadPayment from "./UploadPayment";
import ListPayment from "./ListPayments";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPayment />} />
                <Route path="/list" element={<ListPayment />} />
                <Route path="/upload" element={<UploadPayment />} />
                <Route path="/modify:id" element={<ModifyPayment />} />
                <Route path="/add" element={<AddPayment />} />
            </Route>

        </Routes>
    </>)
}