import { Routes, Route } from "react-router";
import Layout from "./Layout";
import { Card } from "../../../components/Card";





export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div className="flex flex-col items-center">

                    <div className="" >
                        <Card img={
                            "https://static.vecteezy.com/system/resources/previews/007/491/106/original/business-agreement-contract-document-illustration-paper-with-pencil-and-signature-icon-vector.jpg"
                        } title="Formations" description="Mes documents administratives" tags={[]} width="36" height="36" />
                    </div>
                    <div >
                        <Card img={
                            "https://www.successcolaire.ca/blogue/wp-content/uploads/2014/11/bulletin.jpg"
                        } title="Note" description="Mon bulletin scolaire" tags={[]} width="36" height="36" />
                    </div>
                </div>} />
            </Route>

        </Routes>
    </>)
}