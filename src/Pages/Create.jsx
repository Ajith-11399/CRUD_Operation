import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [createData, setcreateData] = useState({
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

   const handleChange = (e) => {
    const { name, value } = e.target;

    const nameParts = name.split('.');
    if (nameParts.length === 1) {
      setcreateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      setcreateData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts.length === 3) {
      setcreateData((prevData) => ({
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
      await axios.post('https://665760dd9f970b3b36c90a24.mockapi.io/api/userData', createData);
      console.log("Data created successfully!");
    } catch (error) {
      console.log(error);
    }
    navigate('/users');
  };

  return(
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>

            <div className="row mt-5">
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="id" value={createData.id} onChange={handleChange} placeholder="ID" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" value={createData.name} onChange={handleChange} placeholder="Name" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="username" value={createData.username} onChange={handleChange} placeholder="Username" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" name="email" value={createData.email} onChange={handleChange} placeholder="mail" />
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.street" value={createData.address.street} onChange={handleChange} placeholder="Street" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.suite" value={createData.address.suite} onChange={handleChange} placeholder="Suite" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="address.city" value={createData.address.city} onChange={handleChange} placeholder="City" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="mb-3">
                  <input type="text" className="form-control" name="address.zipcode" value={createData.address.zipcode} onChange={handleChange} placeholder="Zipcode" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="mb-3">
                  <input type="text" className="form-control" name="address.geo.lat" value={createData.address.geo.lat} onChange={handleChange} placeholder="Latitude" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="mb-3">
                  <input type="text" className="form-control" name="address.geo.lng" value={createData.address.geo.lng} onChange={handleChange} placeholder="Longitude" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3">
                  <input type="text" className="form-control" name="phone" value={createData.phone} onChange={handleChange} placeholder="Phone" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3">
                  <input type="text" className="form-control" name="website" value={createData.website} onChange={handleChange} placeholder="Website" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3">
                  <input type="text" className="form-control" name="company.name" value={createData.company.name} onChange={handleChange} placeholder="Company Name" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3">
                  <input type="text" className="form-control" name="company.catchPhrase" value={createData.company.catchPhrase} onChange={handleChange} placeholder="Company Catchphrase" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3">
                  <input type="text" className="form-control" name="company.bs" value={createData.company.bs} onChange={handleChange} placeholder="Company BS" />
                </div>
              </div>

            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                <h4 className="text-center">Create</h4>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
};

export default Create;
