import { Button, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Loginpage() {
  const userButtons = [
    {
      name: "Manager",
      backGroundColor: "",
    },
    {
      name: "Admin",
      backGroundColor: "",
    },
    {
      name: "Service Advisors",
      backGroundColor: "",
    },
    {
      name: "Technicians",
      backGroundColor: "",
    },
  ];

  const managerLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const adminLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const advisorLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const technicianLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [managerLogin, setManagerLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [advisorLogin, setAdvisorLogin] = useState(false);
  const [technicianLogin, setTechnicianLogin] = useState(false);
  return (
    <div className="loginPage">
      <div className="textArea">
        <span>CRM APP</span>
        <span>Select User</span>
      </div>
      <div className="loginUserButtons">
        {userButtons.map((data) => (
          <motion.div
            onClick={() =>
              data.name == "Manager"
                ? setManagerLogin(true)
                : data.name == "Admin"
                ? setAdminLogin(true)
                : data.name == "Service Advisors"
                ? setAdvisorLogin(true)
                : data.name == "Technicians"
                ? setTechnicianLogin(true)
                : ""
            }
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Paper className="selectUserButtons" elevation={8}>
              {data.name}
            </Paper>
          </motion.div>
        ))}
      </div>
      {managerLogin == true ? (
        <Paper className="LoginForm" elevation={8}>
          <span>Manager Login</span>
          <form
            className="inputSection"
            onSubmit={managerLoginForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              onChange={managerLoginForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              variant="standard"
              name="password"
              onChange={managerLoginForm.handleChange}
            />
            <Button type="submit">Login</Button>
            <Button
              style={{ color: "red" }}
              onClick={() => setManagerLogin(false)}
            >
              Close
            </Button>
          </form>
        </Paper>
      ) : (
        ""
      )}
      {adminLogin == true ? (
        <Paper className="LoginForm" elevation={8}>
          <span>Admin Login</span>
          <form className="inputSection" onSubmit={adminLoginForm.handleSubmit}>
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              onChange={adminLoginForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              variant="standard"
              name="password"
              onChange={adminLoginForm.handleChange}
            />
            <Button type="submit">Login</Button>
            <Button
              style={{ color: "red" }}
              onClick={() => setAdminLogin(false)}
            >
              Close
            </Button>
          </form>
        </Paper>
      ) : (
        ""
      )}
      {advisorLogin == true ? (
        <Paper className="LoginForm" elevation={8}>
          <span>Service Advisor Login</span>
          <form
            className="inputSection"
            onSubmit={advisorLoginForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              onChange={advisorLoginForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              variant="standard"
              name="password"
              onChange={advisorLoginForm.handleChange}
            />
            <Button type="submit">Login</Button>
            <Button
              style={{ color: "red" }}
              onClick={() => setAdvisorLogin(false)}
            >
              Close
            </Button>
          </form>
        </Paper>
      ) : (
        ""
      )}
      {technicianLogin == true ? (
        <Paper className="LoginForm" elevation={8}>
          <span>Technicians Login</span>
          <form
            className="inputSection"
            onSubmit={technicianLoginForm.handleSubmit}
          >
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              onChange={technicianLoginForm.handleChange}
            />
            <TextField
              id="standard-search"
              label="Password"
              type="password"
              variant="standard"
              name="password"
              onChange={technicianLoginForm.handleChange}
            />
            <Button type="submit">Login</Button>
            <Button
              style={{ color: "red" }}
              onClick={() => setTechnicianLogin(false)}
            >
              Close
            </Button>
          </form>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loginpage;
