import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

function MangerForm() {
  return (
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
      <Button type="submit">Sign Up</Button>
      <Button type="submit">Forgot Password</Button>
      <Button
        style={{ color: "red" }}
        onClick={() => setManagerLogin(false)}
      >
        Close
      </Button>
    </form>
  </Paper>
  )
}

export default MangerForm