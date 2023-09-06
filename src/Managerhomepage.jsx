import { Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Managerhomepage() {
  const leads = [
    {
      name: "New",
      route: "newLeads",
      borderColor: "#004DCB",
    },
    {
      name: "Lost",
      route: "",
      borderColor: "#332D2D",
    },
    {
      name: "Contacted",
      route: "",
      borderColor: "#54B4D3",
    },
    {
      name: "Canceled",
      route: "",
      borderColor: "#E00B2E",
    },
    {
      name: "Qualified",
      route: "",
      borderColor: "#E4A11B",
    },
    {
      name: "Confirmed",
      route: "",
      borderColor: "#14A44D",
    },
  ];

  const serviceRequest = [
    {
      name: "Created",
      route: "",
      borderColor: "#004DCB",
    },
    {
      name: "Released",
      route: "",
      borderColor: "#A7D000",
    },
    {
      name: "Open",
      route: "",
      borderColor: "#D47200",
    },
    {
      name: "Canceled",
      route: "",
      borderColor: "#E00B2E",
    },
    {
      name: "Inprocess",
      route: "",
      borderColor: "#E4A11B",
    },
    {
      name: "Completed",
      route: "",
      borderColor: "#14A44D",
    },
  ];
  return (
    <div className="managerHomepage">
      <div className="leadsSection">
        <span>Leads</span>
        <div className="cardSection">
          {leads.map((data) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to={data.route} style={{textDecoration:"none"}}>
              <Paper
                elevation={8}
                className="leadCards"
                style={{
                  borderRadius: "10px",
                  borderLeft: `10px solid ${data.borderColor}`,
                }}
              >
                <span style={{ color: `${data.borderColor}` }}>
                  {data.name}
                </span>
              </Paper>
              </Link>
             
            </motion.div>
          ))}
        </div>
      </div>
      <div className="serviceSection">
        <span>Service Requests</span>
        <div className="cardSection">
          {serviceRequest.map((data) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Paper
                elevation={8}
                className="serviceRequestCards"
                style={{
                  borderRadius: "10px",
                  borderLeft: `10px solid ${data.borderColor}`,
                }}
              >
                <span style={{ color: `${data.borderColor}` }}>
                  {data.name}
                </span>
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Managerhomepage;
