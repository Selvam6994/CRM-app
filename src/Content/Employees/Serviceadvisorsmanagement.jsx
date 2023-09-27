import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import profileImage from "../../assets/Images/profile.webp";

function Serviceadvisorsmanagement() {
  const buttons = [
    {
      name: "Add Service Advisor",
      color: "#004DCB",
    },
  ];

  //   temporary data
  const advisorData = [
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
    {
      name: "Shaker.R",
      id: "001",
      email: "shaker@skcare.com",
      phone: "+91 6846416681",
    },
  ];
  const [addForm, setAddForm] = useState(false);

  //   formik form validation
  const addUserForm = useFormik({
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
    <div className="managementPage">
      <div className="pageButtonSection">
        {buttons.map((data) => (
          <motion.div
            onClick={() => {
              data.name == "Add Service Advisor" ? setAddForm(true) : setAddForm(false);
            }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={data.linkTo} style={{ textDecoration: "none" }}>
              <Paper className="userButtons">
                {data.name == "Back" ? (
                  <ArrowBackIosNewIcon sx={{ color: `${data.color}` }} />
                ) : data.name == "Add Service Advisor" ? (
                  <AddIcon sx={{ color: `${data.color}` }} />
                ) : (
                  ""
                )}
                <span style={{ color: `${data.color}` }}>{data.name}</span>
              </Paper>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="dataSection">
        {advisorData.map((data) => (
          <Paper className="userDataCards" elevation={8}>
            <img
              src={profileImage}
              alt="Profile Image"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div className="userDataSection">
              <span style={{ color: "#3E0E40", fontWeight: "bold" }}>Id:</span>
              <span>SA{data.id}</span>
            </div>
            <div className="userDataSection">
              <span style={{ color: "#3E0E40", fontWeight: "bold" }}>
                Name:
              </span>
              <span>{data.name}</span>
            </div>
            <div className="userDataSection">
              <span style={{ color: "#3E0E40", fontWeight: "bold" }}>
                Email:
              </span>
              <span> {data.email}</span>
            </div>
            <div className="userDataSection">
              <span style={{ color: "#3E0E40", fontWeight: "bold" }}>
                Phone:
              </span>
              <span> {data.phone}</span>
            </div>
          </Paper>
        ))}
      </div>
      {addForm == true ? (
        <Paper elevation={8} className="addUserForm">
          <span>Add Service Advisor</span>
          <form
            className="textFieldSection"
            onSubmit={addUserForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Name"
              type="name"
              variant="standard"
              name="name"
              onChange={addUserForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              onChange={addUserForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Mobile"
              type="mobile"
              name="mobile"
              variant="standard"
              onChange={addUserForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              onChange={addUserForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Confirm Password"
              type="confirm password"
              name="confirmPassword"
              variant="standard"
              onChange={addUserForm.handleChange}
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
                    className="userFormButtons"
                    style={{
                      backgroundColor: "#3E0E40",
                      color: "white",
                    }}
                  >
                    Add Service Advisor
                  </Paper>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setAddForm(false)}
              >
                <Paper
                  className="userFormButtons"
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

export default Serviceadvisorsmanagement;