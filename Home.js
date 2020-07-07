import React, { Component } from "react";
import Hello from "./Hello";
import Layout from "./Layout"

export default () => (
  <Layout>
    <Hello name="React" />
    <p>Start editing to see some magic happen :)</p>
    <button type="button" className="btn btn-outline-primary">Primary</button>
  </Layout>
)