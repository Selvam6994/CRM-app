import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Managerdashboard from "./Managerdashboard";
import Loginpage from "./Loginpage";
// import Adminmanagement from "./Adminmanagement";
// import Serviceadvisorsmanagement from "./Serviceadvisorsmanagement";
// import Techniciansmanagement from "./Techniciansmanagement";
import ManagerForm from "./LoginForms/ManagerForm";
import NewLeads from "./Content/Leads/NewLeads";
import Leads from "./Content/Leads/Leads";
import { useEffect, useState } from "react";
import ContactedLeads from "./Content/Leads/ContactedLeads";
import QualifiedLeads from "./Content/Leads/QualifiedLeads";
import LostLeads from "./Content/Leads/LostLeads";
import CanceledLeads from "./Content/Leads/CanceledLeads";
import ConfirmedLeads from "./Content/Leads/ConfirmedLeads";
import ServiceRequests from "./Content/ServiceRequests/ServiceRequests";
import CreatedRequests from "./Content/ServiceRequests/CreatedRequests";
import OpenRequests from "./Content/ServiceRequests/OpenRequests";
import InProcessRequests from "./Content/ServiceRequests/InProcessRequests";
import ReleasedRequests from "./Content/ServiceRequests/ReleasedRequests";
import CancelledRequests from "./Content/ServiceRequests/CancelledRequests";
import CompletedService from "./Content/ServiceRequests/CompletedService";
import Employees from "./Content/Employees/Employees";
import Adminmanagement from "./Content/Employees/Adminmanagement";
import Serviceadvisorsmanagement from "./Content/Employees/Serviceadvisorsmanagement";
import Techniciansmanagement from "./Content/Employees/Techniciansmanagement";

function App() {
  // *************************Leads api fetch function***********************************
  // get new leads data
  const [newLeadsData, setNewLeadsData] = useState([]);
  async function getNewLeads() {
    const getData = await fetch("http://localhost:4000/getNewLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setNewLeadsData([]);
    } else {
      setNewLeadsData(jsonData);
    }
  }

  // get contacted leads data
  const [contactedLeadsData, setContactedLeadsData] = useState([]);
  async function getContactedLeads() {
    const getData = await fetch("http://localhost:4000/getContactedLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setContactedLeadsData([]);
    } else {
      setContactedLeadsData(jsonData);
    }
  }

  // get qualified leads data
  const [qualifiedLeadsData, setQualifiedLeadsData] = useState([]);
  async function getQualifiedLeads() {
    const getData = await fetch("http://localhost:4000/getQualifiedLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setQualifiedLeadsData([]);
    } else {
      setQualifiedLeadsData(jsonData);
    }
  }

  // get lost leads data
  const [lostLeadsData, setLostLeadsData] = useState([]);
  async function getLostLeads() {
    const getData = await fetch("http://localhost:4000/getLostLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setLostLeadsData([]);
    } else {
      setLostLeadsData(jsonData);
    }
  }

  // get confirmed leads data
  const [confirmedLeadsData, setConfirmedData] = useState([]);
  async function getConfirmedLeads() {
    const getData = await fetch("http://localhost:4000/getConfirmedLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setConfirmedData([]);
    } else {
      setConfirmedData(jsonData);
    }
  }

  // get cancelled leads data
  const [cancelledLeadsData, setCancelledData] = useState([]);
  async function getCancelledLeads() {
    const getData = await fetch("http://localhost:4000/getCancelledLeads");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setCancelledData([]);
    } else {
      setCancelledData(jsonData);
    }
  }
  // *************************Leads api fetch function***********************************

  // *************************Service Requests api fetch function***********************************
  // get Created Service Requests data
  const [newServiceData, setNewServiceData] = useState([]);
  async function getCreatedRequests() {
    const getData = await fetch(
      "http://localhost:4000/getCreatedServiceRequests"
    );
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setNewServiceData([]);
    } else {
      setNewServiceData(jsonData);
    }
  }

  // get Open Service Requests data
  const [openServiceData, setOpenServiceData] = useState([]);
  async function getOpenRequests() {
    const getData = await fetch("http://localhost:4000/getOpenServiceRequests");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setOpenServiceData([]);
    } else {
      setOpenServiceData(jsonData);
    }
  }

  // get Open Service Requests data
  const [inProcessData, setInProcessData] = useState([]);
  async function getInProcessData() {
    const getData = await fetch("http://localhost:4000/getServiceInProcees");
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setInProcessData([]);
    } else {
      setInProcessData(jsonData);
    }
  }

  // getCompleted Service Requests data
  const [completedData, setCompletedData] = useState([]);
  async function getCompletedData() {
    const getData = await fetch(
      "http://localhost:4000/getCompletedServiceData"
    );
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setCompletedData([]);
    } else {
      setCompletedData(jsonData);
    }
  }

  // getCompleted Service Requests data
  const [cancelledRequestData, setCancelledRequestData] = useState([]);
  async function getCancelledData() {
    const getData = await fetch(
      "http://localhost:4000/getCancelledServiceRequests"
    );
    const jsonData = await getData.json();
    if (jsonData.message == "no data") {
      setCancelledRequestData([]);
    } else {
      setCancelledRequestData(jsonData);
    }
  }

  useEffect(() => {
    // leads
    getNewLeads();
    getContactedLeads();
    getQualifiedLeads();
    getLostLeads();
    getConfirmedLeads();
    getCancelledLeads();
    // service requests
    getCreatedRequests();
    getOpenRequests();
    getInProcessData();
    getCompletedData();
    getCancelledData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="managerForms" element={<ManagerForm />} />
        <Route path="managerDashBoard" element={<Managerdashboard />}>
          <Route
            path=""
            element={
              <Leads
                newLeadsData={newLeadsData}
                getNewLeads={getNewLeads}
                contactedLeadsData={contactedLeadsData}
                qualifiedLeadsData={qualifiedLeadsData}
                lostLeadsData={lostLeadsData}
                confirmedLeadsData={confirmedLeadsData}
                cancelledLeadsData={cancelledLeadsData}
              />
            }
          >
            <Route
              path=""
              element={
                <NewLeads
                  newLeadsData={newLeadsData}
                  getNewLeads={getNewLeads}
                  getContactedLeads={getContactedLeads}
                />
              }
            />
            <Route
              path="contacted"
              element={
                <ContactedLeads
                  contactedLeadsData={contactedLeadsData}
                  getContactedLeads={getContactedLeads}
                  getQualifiedLeads={getQualifiedLeads}
                  getLostLeads={getLostLeads}
                />
              }
            />
            <Route
              path="qualified"
              element={
                <QualifiedLeads
                  qualifiedLeadsData={qualifiedLeadsData}
                  getQualifiedLeads={getQualifiedLeads}
                  getConfirmedLeads={getConfirmedLeads}
                  getCancelledLeads={getCancelledLeads}
                />
              }
            />
            <Route
              path="lost"
              element={
                <LostLeads
                  lostLeadsData={lostLeadsData}
                  getLostLeads={getLostLeads}
                />
              }
            />
            <Route
              path="cancelled"
              element={
                <CanceledLeads
                  cancelledLeadsData={cancelledLeadsData}
                  getCancelledLeads={getCancelledLeads}
                />
              }
            />
            <Route
              path="confirmed"
              element={
                <ConfirmedLeads confirmedLeadsData={confirmedLeadsData} />
              }
            />
          </Route>
          <Route
            path="serviceRequests"
            element={
              <ServiceRequests
                newServiceData={newServiceData}
                openServiceData={openServiceData}
                inProcessData={inProcessData}
                completedData={completedData}
                cancelledRequestData={cancelledRequestData}
                getCreatedRequests={getCreatedRequests}
              />
            }
          >
            <Route
              path=""
              element={
                <CreatedRequests
                  newServiceData={newServiceData}
                  getCreatedRequests={getCreatedRequests}
                  getOpenRequests={getOpenRequests}
                  getCancelledData={getCancelledData}
                />
              }
            />
            <Route
              path="openRequests"
              element={
                <OpenRequests
                  openServiceData={openServiceData}
                  getOpenRequests={getOpenRequests}
                  getInProcessData={getInProcessData}
                />
              }
            />
            <Route
              path="inProcessRequests"
              element={
                <InProcessRequests
                  inProcessData={inProcessData}
                  getInProcessData={getInProcessData}
                  getCompletedData={getCompletedData}
                />
              }
            />
            <Route
              path="cancelledRequests"
              element={
                <CancelledRequests
                  cancelledRequestData={cancelledRequestData}
                  getCancelledData={getCancelledData}
                />
              }
            />
            <Route
              path="completedService"
              element={<CompletedService completedData={completedData} />}
            />
          </Route>
          <Route path="employees" element={<Employees />}>
            <Route path="" element={<Adminmanagement />} />
            <Route
              path="serviceAdvisor"
              element={<Serviceadvisorsmanagement />}
            />
            <Route path="technician" element={<Techniciansmanagement />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
