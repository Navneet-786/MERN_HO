import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(
        "https://mern-hospital-management-backend-qwa6.onrender.com/api/v1/message/getall",
        { withCredentials: true }
      );
      setMessages(data.messages);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  const deleteMessage = (msg) => {
    try {
      const id = msg._id;
      axios.delete(
        `https://mern-hospital-management-backend-qwa6.onrender.com/api/v1/message/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1>MESSAGE</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="del-btn-block">
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteMessage(element);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div className="details">
                  <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
