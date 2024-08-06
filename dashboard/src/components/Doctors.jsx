import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

import { MdDelete } from "react-icons/md";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get(
        "https://mern-hospital-management-backend-qwa6.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
  const deleteDoctor = async (doctor) => {
    try {
      const id = doctor._id;
      await axios.delete(
        `https://mern-hospital-management-backend-qwa6.onrender.com/api/v1/user/doctor/delete/${id}`,
        { withCredentials: true }
      );
      fetchDoctors();
    } catch (err) {
      console.log(err);
    }
  };
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card" key={element.index}>
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  {/* <p>
                    NIC: <span>{element.nic}</span>
                  </p> */}
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
                <button
                  className="removeDoctor"
                  onClick={() => {
                    deleteDoctor(element);
                  }}
                >
                  <MdDelete />
                  Remove{" "}
                </button>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
