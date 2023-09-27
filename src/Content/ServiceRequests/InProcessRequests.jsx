import { Button } from '@mui/material'
import React from 'react'

function InProcessRequests({inProcessData,getInProcessData,getCompletedData}) {

  async function updateCompletedStatus(data) {
    const update = await fetch("http://localhost:4000/serviceCompleted", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    getCompletedData()
    getInProcessData()
  }
  return (
    <div className="contentTableSection">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>vehicle Number</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inProcessData.map((data) => (
            <tr>
              <td>{inProcessData.indexOf(data) + 1}</td>
              <td>{data.date}</td>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.vehicleNumber}</td>
              <td>{data.serviceRequirements}</td>
              <td>{data.status}</td>
              <td>
                <Button
                  style={{ color: "purple" }}
                  onClick={() => updateCompletedStatus(data)}
                >
                Completed
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InProcessRequests