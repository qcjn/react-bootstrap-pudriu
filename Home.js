import React, { Component } from "react";
import Hello from "./Hello";
import Layout from "./Layout"

export default () => (
  <Layout>
    <h1>Hello React! </h1>
    <p>Start editing to see some magic happen :)</p>
    <button type="button" className="btn btn-outline-primary" onClick={click}>Primary</button>
  </Layout>
)

function click(e) {
  console.log("click")
}