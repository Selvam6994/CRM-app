import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function NewLeads({ newLeadsData, getNewLeads, getContactedLeads }) {
  async function updateContactedStatus(data) {
    const update = await fetch("http://localhost:4000/contactedLeads", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    getNewLeads();
    getContactedLeads();
  }
  return (
    <div className="contentTableSection">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Requirements</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newLeadsData.map((data) => (
            <tr>
              <td>{newLeadsData.indexOf(data) + 1}</td>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.requirements}</td>
              <td>{data.status}</td>
              <td>
                <Button
                  style={{ color: "purple" }}
                  onClick={() => updateContactedStatus(data)}
                >
                  Contact
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewLeads;