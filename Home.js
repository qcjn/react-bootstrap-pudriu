import React, { Component } from "react";
import Hello from "./Hello";
import Layout from "./Layout"

export default () => (
  <Layout>
    <h1>Hello React! </h1>
    <p>Start editing to see some magic happen :)</p>
    <button type="button" className="btn btn-outline-primary">Primary</button>
  </Layout>
)