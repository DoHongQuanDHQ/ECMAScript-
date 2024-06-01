import React from "react";
import { Link } from "react-router-dom";

// ! props = propeties = Những thuộc tính
const Index = ({ data, username }) => {
  console.log(data);
  return (
    <>
      <h1>Hello, {username}</h1>
      <Link to="/admin/product-add" className="btn btn-primary">
        Add
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.thumbnail} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link
                  to={`/admin/product-form/${product.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <Link
                  to={`/admin/product-delete/${product.id}`}
                  className="btn btn-danger"
                >
                  Remove
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Index;
