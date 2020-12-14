import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layaout"
import Home from "../components/home"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
export default App