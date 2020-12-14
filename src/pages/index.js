import React from "react"
import Layout from "../components/Layaout"
import Home from "../components/home";


const App = (props) => {
  console.log(props)
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
export default App