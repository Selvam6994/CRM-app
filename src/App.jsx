import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Managerdashboard from "./Managerdashboard";
import Loginpage from "./Loginpage";
import Managerhomepage from "./Managerhomepage";
import Adminmanagement from "./Adminmanagement";
import Addadmin from "./Addadmin";
import Serviceadvisorsmanagement from "./Serviceadvisorsmanagement";
import Techniciansmanagement from "./Techniciansmanagement";
import Newleads from "./Newleads";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="managerDashBoard" element={<Managerdashboard />}>
          <Route path="managerHomepage" element={<Managerhomepage />} />
          <Route path="adminManagement" element={<Adminmanagement />} />
          <Route
            path="serviceAdvisorManagement"
            element={<Serviceadvisorsmanagement />}
          />
          <Route
            path="techniciansManagement"
            element={<Techniciansmanagement />}
          />
          <Route
            path="/managerDashBoard/managerHomepage/newLeads"
            element={<Newleads />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
