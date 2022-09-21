import {
  BrowserRouter,
  Routes as RoutesV6,
  Route,
  Navigate,
} from "react-router-dom";

import { Layout } from "../components/layout/layout";
import { Dashboard } from "../containers/dashboard/dashboard";
import { DataTable } from "../containers/dataTable/dataTable";
import { Feedback } from "../containers/feedback/feedback";
import { Fields } from "../containers/fields/fields";
import { Modais } from "../containers/modais/modais";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesV6>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modais" element={<Modais />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/dataTable" element={<DataTable />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </RoutesV6>
    </BrowserRouter>
  );
};

export { Routes };
