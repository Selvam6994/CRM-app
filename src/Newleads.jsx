import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";

function Newleads() {
  const leadPageButtons = [
    {
      name: "Back",
      linkTo: "/managerDashBoard/managerHomepage",
      color: "#E00B2E",
    },
    {
      name: "New Leads",
      color: "#004DCB",
    },
  ];

  const [leadsform, addLeadsForm] = useState(false);

  //   formik form validation
  const addNewLeadsForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="leadsPage">
      <div className="leadPageButtonSection">
        {leadPageButtons.map((data) => (
          <motion.div
            onClick={() => {
              data.name == "New Leads"
                ? addLeadsForm(true)
                : addLeadsForm(false);
            }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={data.linkTo} style={{ textDecoration: "none" }}>
              <Paper
                className="leadPageButtons"
                elevation={8}
                style={{ color: data.color }}
              >
                {data.name == "Back" ? (
                  <ArrowBackIosNewIcon sx={{ color: `${data.color}` }} />
                ) : data.name == "New Leads" ? (
                  <AddIcon sx={{ color: `${data.color}` }} />
                ) : (
                  ""
                )}{" "}
                {data.name}
              </Paper>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="tableSection"></div>
      {leadsform == true ? (
        <Paper elevation={8} className="addNewLeadsForm">
          <span>New Leads</span>
          <form
            className="textFieldSection"
            onSubmit={addNewLeadsForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Name"
              type="name"
              variant="standard"
              name="name"
              onChange={addNewLeadsForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              onChange={addNewLeadsForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Mobile"
              type="mobile"
              name="mobile"
              variant="standard"
              onChange={addNewLeadsForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              onChange={addNewLeadsForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Confirm Password"
              type="confirm password"
              name="confirmPassword"
              variant="standard"
              onChange={addNewLeadsForm.handleChange}
            />
            <div className="formButtonSection">
              <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button type="submit">
                  <Paper
                    elevation={8}
                    className="leadFormButtons"
                    style={{
                      backgroundColor: "#3E0E40",
                      color: "white",
                    }}
                  >
                    Create New Leads
                  </Paper>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => addLeadsForm(false)}
              >
                <Paper
                  className="leadFormButtons"
                  elevation={8}
                  style={{
                    backgroundColor: "#3E0E40",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Back
                </Paper>
              </motion.div>
            </div>
          </form>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
}

export default Newleads;
