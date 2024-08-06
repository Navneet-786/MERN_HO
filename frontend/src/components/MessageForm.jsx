import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const handleMessage = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      toast.warning("Please login first!");
    }
    const data = { firstName, lastName, email, phone, message };
    try {
      await axios
        .post(
          "https://mern-hospital-management-backend-qwa6.onrender.com/api/v1/message/send",
          data,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response);
      } else {
        toast.error("An unexpected error occurred");
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="container form-component message-form bg-slate-800">
        <h2 className="text-yellow-500">Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  );
};

export default MessageForm;
