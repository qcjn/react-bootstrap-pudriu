import React from 'react';
import Layout from "./Layout";

export default () => (
  <Layout>
    <h1>Action</h1>

    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {tabItems}
      </tbody>
    </table>
  </Layout>
)


const arr = [
  {first:"a", last:"aa", handle:"@aaa"},
  {first:"b", last:"bb", handle:"@bbb"}, 
  {first:"c", last:"cc", handle:"@ccc"}
]
const tabItems = arr.map((item, index) => (
  <tr key={index + 1}>
    <th scope="row">{index + 1}</th>
    <td>{item.first}</td>
    <td>{item.last}</td>
    <td>{item.handle}</td>
  </tr>
))
