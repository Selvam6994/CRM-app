import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import profileImage from "../../assets/Images/profile.webp";

function Adminmanagement() {
  const buttons = [
    {
      name: "Add Admin",
      color: "#004DCB",
    },
  ];

  //   temporary data
  const adminData = [
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
const[errorMessage,setErrorMessage] = useState("")
  //   formik form validation
  const addAdminForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      pin: "",
      confirmPin: "",
    },
    onSubmit: async (values) => {
      const postData = await fetch("http://localhost:4000/adminSignUp", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (postData.status == 200) {
        setAddForm(false);
      } else {
        setErrorMessage(postData.message);
      }
    },
  });
  return (
    <div className="managementPage">
      <div className="pageButtonSection">
        {buttons.map((data) => (
          <motion.div
            onClick={() => {
              data.name == "Add Admin" ? setAddForm(true) : setAddForm(false);
            }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={data.linkTo} style={{ textDecoration: "none" }}>
              <Paper className="userButtons">
                {data.name == "Back" ? (
                  <ArrowBackIosNewIcon sx={{ color: `${data.color}` }} />
                ) : data.name == "Add Admin" ? (
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
        {adminData.map((data) => (
          <Paper className="userDataCards" elevation={8}>
            <img
              src={profileImage}
              alt="Profile Image"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div className="userDataSection">
              <span style={{ color: "#3E0E40", fontWeight: "bold" }}>Id:</span>
              <span>AD{data.id}</span>
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
            <Button style={{ color: "red" }}>Reset pin</Button>
          </Paper>
        ))}
      </div>
      {addForm == true ? (
        <Paper elevation={8} className="addUserForm">
          <span>Add Admin</span>
          <form
            className="textFieldSection"
            onSubmit={addAdminForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Name"
              type="name"
              variant="standard"
              name="name"
              onChange={addAdminForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              onChange={addAdminForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Phone"
              type="phone"
              name="phone"
              variant="standard"
              onChange={addAdminForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Pin"
              type="pin"
              name="pin"
              variant="standard"
              onChange={addAdminForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Confirm Pin"
              type="confirm pin"
              name="confirmPin"
              variant="standard"
              onChange={addAdminForm.handleChange}
            />
            <span>{errorMessage}</span>
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
                    Create Admin
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

export default Adminmanagement;