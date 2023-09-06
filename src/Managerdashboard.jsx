import { Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import { Routes, Route, Link, Outlet } from "react-router-dom";


function Managerdashboard() {
  const navButtons = [
    {
      name: "Admin",
      linkTo: "adminManagement",
    },
    {
      name: "Advisors",
      linkTo: "serviceAdvisorManagement",
    },
    {
      name: "Technicians",
      linkTo: "techniciansManagement",
    },
  ];
  return (
    <div className="managerDashboard">
      <Paper
        className="sideNav"
        elevation={16}
        style={{ backgroundColor: "#3E0E40" }}
      >
        <div className="pageName">
          {" "}
          <span>Manager Dashboard</span>
        </div>
        <div className="navOptions">
          {navButtons.map((data) => (
            <motion.div
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to={data.linkTo} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={8}
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#3E0E40",
                  }}
                >
                  <span className="navButtonText">{data.name}</span>
                </Paper>
              </Link>
            </motion.div>
          ))}
        </div>
      </Paper>
      <div className="contentPage">
        {/* <Routes>
          <Route path="/" element={<Managerhomepage />} />
          <Route path="../adminManagement" element={<Adminmanagement />} />
          <Route
            path="serviceAdvisorManagement"
            element={<Serviceadvisorsmanagement />}
          />
          <Route
            path="techniciansManagement"
            element={<Techniciansmanagement />}
          />
          <Route path="newLeads" element={<Newleads />} />
        </Routes> */}
        <Outlet/>
      </div>
    </div>
  );
}

export default Managerdashboard;
