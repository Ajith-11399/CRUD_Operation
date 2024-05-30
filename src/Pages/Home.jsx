import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [userDatas, setUserDatas] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://665760dd9f970b3b36c90a24.mockapi.io/api/userData")
      .then((res) => setUserDatas(res.data))
      .catch((error) => console.log("error"));
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 m-3 g-4">
        {userDatas.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card m-2 g-3">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title text-center m-1 mt-2 mb-4">
                      <b>
                        {element.id}.&nbsp;{element.username}
                      </b>
                    </h5>
                    <h6 className="card-text">
                      <b>Name:</b> {element.name}
                    </h6>
                    <h6 className="card-title">
                      <b>Email Address:</b> {element.email}
                    </h6>
                    <h6 className="card-title">
                      <b>Address:</b>
                      {element.address.street}, {element.address.suite},{" "}
                      {element.address.city}, {element.address.zipcode} <br />{" "}
                      lat: {element.address.geo.lat}, lng:
                      {element.address.geo.lng}
                    </h6>
                    <h6 className="card-title">
                      <b>Phone:</b> {element.phone}
                    </h6>
                    <h6 className="card-title">
                      <b>Website:</b> {element.website}
                    </h6>
                    <h6 className="card-title">
                      <b>Company Name:</b> {element.company.name}
                    </h6>
                    <h6 className="card-title"><b>Company Catchphrase:</b> {element.company.catchPhrase}</h6>
                    <h6 className="card-title"><b>Company bs:</b> {element.company.bs}</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
