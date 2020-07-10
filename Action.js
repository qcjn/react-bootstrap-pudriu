import React from 'react';
import Layout from "./Layout";

export default () => (
  <Layout>
    <h1>Action</h1>
    <ul>{listItems}</ul>
  </Layout>
)


const arr = [{name:"a"}, {name:"b"} , {name:"c"}]
const listItems = arr.map(item => (
  <div>
  name: {item.name}
  </div>
))
 