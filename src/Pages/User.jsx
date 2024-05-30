import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = ({ setId }) => {
  const [userDatas, setUserDatas] = useState([]);
  const [delData, setDelData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [delData]);

  const fetchData = async () => {
    await axios
      .get("https://665760dd9f970b3b36c90a24.mockapi.io/api/userData")
      .then((res) => setUserDatas(res.data))
      .catch((error) => console.log("Error"));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDel = async(id) => {
    await axios.delete(`https://665760dd9f970b3b36c90a24.mockapi.io/api/userData/${id}`)
    .then((res)=> setDelData(res.data))
    .catch((error) => console.log("Error"));
  }

  return (
    <div className="container-fluid mt-3">
      <div className="table-responsive">
        <table
          className="table table-bordered border-dark"
          // style={{ overflow: "scroll" }}
          style={{ overflow: "scroll", width: "100%", height: "800px" }}
        >
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company Name</th>
              <th scope="col">Catchphrase</th>
              <th scope="col">BS</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {userDatas.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{element.id}</th>
                  <td>{element.username}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    {element.address.street}, {element.address.suite},{" "}
                    {element.address.city} - {element.address.zipcode},{" "}
                    {element.address.geo.lat}, {element.address.geo.lng}.
                  </td>
                  <td>{element.phone}</td>
                  <td>{element.website}</td>
                  <td>{element.company.name}</td>
                  <td>{element.company.catchPhrase}</td>
                  <td>{element.company.bs}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleEdit(element.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDel(element.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="m-5">
        <button className="btn btn-primary  text-center" onClick={()=>{navigate('/create')}}>
          <h4>Create User Data</h4>
        </button>
      </div>
    </div>
  );
};

export default User;
