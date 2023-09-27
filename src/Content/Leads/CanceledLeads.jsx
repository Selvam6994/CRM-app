import { Button } from "@mui/material";
import React from "react";

function CanceledLeads({ cancelledLeadsData, getCancelledLeads }) {
  async function deleteLostData(data) {
    const updateStatus = await fetch(
      "http://localhost:4000/deleteCancelledData",
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    getCancelledLeads();
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
          {cancelledLeadsData.map((data) => (
            <tr>
              <td>{cancelledLeadsData.indexOf(data) + 1}</td>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.requirements}</td>
              <td>{data.status}</td>
              <td>
                <Button
                  style={{ color: "red" }}
                  onClick={() => deleteLostData(data)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CanceledLeads;