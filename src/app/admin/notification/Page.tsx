import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";

import ListNotification from "./ListNotification";
import NewNotification from "./NewNotification";

function Page() {
  return (
    <Routes>
			<Route element={ <Layout />}>
				<Route path="/liste" element={ <ListNotification />} />
				<Route path="/" element={ <ListNotification />} />
				<Route path="/envoi" element={ <NewNotification />} />
      </Route>
    </Routes>
  );
}

export default Page;
