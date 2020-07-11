import React from 'react';
import Layout from "./Layout";

export default () => (
  <Layout>
    <h1>Another action</h1><h1>{process.env.REACT_APP_FOO}</h1>
  </Layout>
)