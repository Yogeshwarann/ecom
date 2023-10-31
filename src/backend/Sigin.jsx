import React, { useState } from "react";
import axios from "axios";
import './Login.css'; 
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Sigg() {
  const [formData, setFormData] = useState({
    name: "",
    umail: "",
    password: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, umail, password, phone, address } = formData;

    // Validate email format
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);

    // Validate phone number format (10 digits)
    const isPhoneValid = /^\d{10}$/.test(phone);

    if (!name || !umail || !password || !phone || !address) {
      toast.error("Please fill in all fields.");
    } else if (!isEmailValid) {
      toast.error("Please enter a valid email address.");
    } else if (!isPhoneValid) {
      toast.error("Phone number must have exactly 10 digits.");
    } else {
      const requestData = {
        uname: name,
        umail: umail,
        upassword: password,
        uadd: address,
        phone: phone,
      };

      try {
        const response = await axios.post("http://localhost:3000/u/user/insertion", requestData);
        if (response.data.user) {
          dispatch(login(response.data.user))
          navigate("/");
          toast.success("Welcome " + response.data.user.uname + "✌️✌️");
        } else {
          toast.error("Fill all the fields")
        }
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    }
  };

  return (
    <div className="asd">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="umail"
                placeholder="Your Mail Id"
                value={formData.umail}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="action">
            <Link to="/log">
              <button>Login</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sigg;
