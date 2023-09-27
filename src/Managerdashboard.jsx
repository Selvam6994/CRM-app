import { Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import { Routes, Route, Link, Outlet } from "react-router-dom";

function Managerdashboard() {
  const navButtons = [
    {
      name: "Leads",
      linkTo: "",
    },
    {
      name: "Service Requests",
      linkTo: "serviceRequests",
    },
    {
      name: "Employees",
      linkTo: "employees",
    },
    {
      name: "Customer Data",
      linkTo: "/customers",
    },
    {
      name: "Inventory",
      linkTo: "#",
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
                    borderRadius: "10px",
                    backgroundColor: "#3E0E40",
                  }}
                  className="sideNavButtons"
                >
                  <span className="navButtonText">{data.name}</span>
                </Paper>
              </Link>
            </motion.div>
          ))}
        </div>
      </Paper>
      <div className="contentPage">
        <Paper
          className="topBar"
          style={{ backgroundColor: "GrayText" }}
          elevation={8}
        ></Paper>

        <Outlet />
      </div>
    </div>
  );
}

export default Managerdashboard;
