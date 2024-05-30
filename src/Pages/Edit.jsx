import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://665760dd9f970b3b36c90a24.mockapi.io/api/userData/${id}`);
      setEditData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nameParts = name.split('.');
    if (nameParts.length === 1) {
      setEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      setEditData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts.length === 3) {
      setEditData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: {
            ...prevData[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://665760dd9f970b3b36c90a24.mockapi.io/api/userData/${id}`, editData);
      console.log("Data updated successfully!");
    } catch (error) {
      console.log(error);
    }
    navigate('/users');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>
            <div className="row mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="id" value={editData.id} onChange={handleChange} placeholder="ID" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" value={editData.name} onChange={handleChange} placeholder="Name" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="username" value={editData.username} onChange={handleChange} placeholder="Username" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="email" value={editData.email} onChange={handleChange} placeholder="Email" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.street" value={editData.address.street} onChange={handleChange} placeholder="Street" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.suite" value={editData.address.suite} onChange={handleChange} placeholder="Suite" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.city" value={editData.address.city} onChange={handleChange} placeholder="City" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.zipcode" value={editData.address.zipcode} onChange={handleChange} placeholder="Zipcode" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.geo.lat" value={editData.address.geo.lat} onChange={handleChange} placeholder="Latitude" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.geo.lng" value={editData.address.geo.lng} onChange={handleChange} placeholder="Longitude" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="phone" value={editData.phone} onChange={handleChange} placeholder="Phone" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="website" value={editData.website} onChange={handleChange} placeholder="Website" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="company.name" value={editData.company.name} onChange={handleChange} placeholder="Company Name" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="company.catchPhrase" value={editData.company.catchPhrase} onChange={handleChange} placeholder="Company Catchphrase" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="company.bs" value={editData.company.bs} onChange={handleChange} placeholder="Company BS" />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary btnu" type="submit">
                Update
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;