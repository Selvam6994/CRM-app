import { Button, IconButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import profileImage from "../../assets/Images/profile.webp";

function Techniciansmanagement({ technicianData, getTechnicianData }) {
  const [addForm, setAddForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [updateForm, setUpdateForm] = useState();
  const [updateDataError, setUpdateDataError] = useState("");
  const formTextFields = [
    {
      lable: "Name",
      name: "name",
      type: "text",
    },
    {
      lable: "Email",
      name: "email",
      type: "email",
    },
    {
      lable: "Phone",
      name: "phone",
      type: "number",
    },
    {
      lable: "New Pin",
      name: "pin",
      type: "password",
    },
    {
      lable: "Confirm Pin",
      name: "confirmPin",
      type: "password",
    },
  ];

  //   formik add technician form validation
  const addTechniciansForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      pin: "",
      confirmPin: "",
    },
    onSubmit: async (values) => {
      const postData = await fetch("http://localhost:4000/technicianSignUp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-auth-managerToken": sessionStorage.getItem("managerAuth"),
        },
        body: JSON.stringify(values),
      });
      if (postData.status == 200) {
        setAddForm(false);
        getTechnicianData();
        setErrorMessage("");
      } else {
        const message = await postData.json();
        setErrorMessage(message.message);
      }
    },
  });
  const [getData, setData] = useState({});

  // update data and pin for tecnician
  function UpdateEmployeeData() {
    const updateTechnicianForm = useFormik({
      initialValues: {
        id: "",
        name: "",
        email: "",
        phone: "",
      },
      onSubmit: async (values) => {
        const postData = await fetch(
          "http://localhost:4000/updateTechnicianData",
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              "x-auth-managerToken": sessionStorage.getItem("managerAuth"),
            },
            body: JSON.stringify(values),
          }
        );

        if (postData.status == 200) {
          getTechnicianData();
          setUpdateForm();
          setUpdateDataError("");
        } else {
          setUpdateDataError("Pin does not match");
        }
      },
    });

    const updateTechnicianPin = useFormik({
      initialValues: {
        id: getData._id,
        newPin: "",
        confirmPin: "",
      },
      onSubmit: async (values) => {
        const postData = await fetch(
          "http://localhost:4000/updateTechnicianPin",
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              "x-auth-managerToken": sessionStorage.getItem("managerAuth"),
            },
            body: JSON.stringify(values),
          }
        );

        if (postData.status == 200) {
          getTechnicianData();
          setUpdateForm();
          setUpdateDataError("");
        } else {
          setUpdateDataError("Pin does not match");
        }
      },
    });
    function setUserData() {
      updateTechnicianForm.setValues({
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
      });
    }
    const updateFormTextFields = [
      {
        lable: "Id",
        name: "id",
        type: "text",
        defaultValue: getData._id,
        isEditable: true,
      },
      {
        lable: "Name",
        name: "name",
        type: "text",
        defaultValue: getData.name,
        isEditable: false,
      },
      {
        lable: "Email",
        name: "email",
        type: "email",
        defaultValue: getData.email,
        isEditable: false,
      },
      {
        lable: "Phone",
        name: "phone",
        type: "number",
        defaultValue: getData.phone,
        isEditable: false,
      },
    ];

    const changePin = [
      {
        lable: "Change Pin?",
        name: "newPin",
        type: "password",
        defaultValue: "",
        isEditable: false,
      },
      {
        lable: "Confirm Pin",
        name: "confirmPin",
        type: "password",
        defaultValue: "",
        isEditable: false,
      },
    ];
    return (
      <div className="updateEmployeeFormSection">
        <Paper elevation={8} className="updateServiceFrom">
          <div className="closeButton">
            <IconButton
              color="error"
              onClick={() => setUpdateForm(false) || setErrorMessage("")}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <form
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={updateTechnicianForm.handleSubmit}
          >
            {updateFormTextFields.map((fields) => (
              <TextField
                disabled={fields.isEditable}
                id={fields.name}
                label={fields.lable}
                type={fields.type}
                name={fields.name}
                defaultValue={fields.defaultValue}
                variant="standard"
              />
            ))}
            <span style={{ color: "red" }}>{updateDataError}</span>
            <Button type="submit" onClick={() => setUserData()}>
              {" "}
              Update
            </Button>
          </form>

          <form
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={updateTechnicianPin.handleSubmit}
          >
            {changePin.map((fields) => (
              <TextField
                disabled={fields.isEditable}
                id={fields.name}
                label={fields.lable}
                type={fields.type}
                name={fields.name}
                defaultValue={fields.defaultValue}
                variant="standard"
                onChange={updateTechnicianPin.handleChange}
              />
            ))}
            <span style={{ color: "red" }}>{updateDataError}</span>
            <Button type="submit"> Change Pin</Button>
          </form>
        </Paper>
      </div>
    );
  }
  // delete technician data
  async function deleteData(data) {
    const deleteEmployeeData = await fetch(
      "http://localhost:4000/deleteTechnicianData",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "x-auth-managerToken": sessionStorage.getItem("managerAuth"),
        },
        body: JSON.stringify(data),
      }
    );
    getTechnicianData();
  }
  return (
    <>
      <div className="dataSection">
        {/* *********************Add Employee Data Button ******************************** */}
        <div className="addButtonSection">
          {sessionStorage.getItem("adminAuth") ? (
            ""
          ) : (
            <motion.div
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setAddForm(true)}
            >
              <Paper className="addEmployeeButton">
                <AddIcon /> Add Technician
              </Paper>
            </motion.div>
          )}
        </div>
        {/* *********************Add Employee Data Button ******************************** */}
        {/* *********************Employee Data Cards ******************************** */}
        <div className="dataCardsSection">
          {technicianData.map((data) => (
            <Paper className="userDataCards" elevation={8}>
              <img src={profileImage} alt="profileImage" />
              <div className="userDataSection ">
                <span>Id</span> :<span>{data._id}</span>
              </div>
              <div className="userDataSection ">
                <span>Name</span> :<span>{data.name}</span>
              </div>
              <div className="userDataSection ">
                <span>Email</span> :<span>{data.email}</span>
              </div>
              <div className="userDataSection ">
                <span>Phone</span> :<span>{data.phone}</span>
              </div>
              {sessionStorage.getItem("adminAuth") ? (
                ""
              ) : (
                <>
                  {" "}
                  <Button onClick={() => setUpdateForm(true) || setData(data)}>
                    Update
                  </Button>
                  <Button
                    type="submit"
                    color="error"
                    onClick={() => deleteData(data)}
                  >
                    {" "}
                    Delete
                  </Button>
                </>
              )}
            </Paper>
          ))}
        </div>
        {/* *********************Employee Data Cards ******************************** */}
      </div>
      {addForm ? (
        <div className="addEmployeeFormSection">
          <Paper elevation={8} className="addServiceFrom">
            <div className="closeButton">
              <IconButton
                color="error"
                onClick={() => setAddForm(false) || setErrorMessage("")}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <form
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onSubmit={addTechniciansForm.handleSubmit}
            >
              {formTextFields.map((data) => (
                <TextField
                  id={data.name}
                  label={data.lable}
                  name={data.name}
                  type={data.type}
                  variant="standard"
                  onChange={addTechniciansForm.handleChange}
                />
              ))}
              <span style={{ color: "red" }}>{errorMessage}</span>
              <Button type="submit"> Add</Button>
            </form>
          </Paper>
        </div>
      ) : (
        ""
      )}

      {updateForm ? <UpdateEmployeeData /> : ""}
    </>
  );
}

export default Techniciansmanagement;
