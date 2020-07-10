import React from 'react';
import Layout from "./Layout";

export default () => (
  <Layout>
    <h1>Action</h1>
    <ul>{listItems}</ul>
  </Layout>
)


const arr = [1, 2 , 3]
const listItems = arr.map(num => <li>{num}</li>)
 