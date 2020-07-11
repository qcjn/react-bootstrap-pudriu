import React from 'react';
import Layout from "./Layout";

export default () => (
  <Layout>
    <h1>Another action</h1>{process.env.REACT_APP_NOT_SECRET_CODE}
  </Layout>
)