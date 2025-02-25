import React, { useEffect, useState } from 'react';
import './UpdateUser.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const {id} = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/userfindbyid/${id}`)
    .then((response)=>{
        setUser(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
  },[id])

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/userupdatebyid/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="addUser">
        <div className="inputGroup">
          <Link to="/" type="button" className="button_submit">
            <i className="fa-solid fa-backward"></i> Back
          </Link>
        </div>
        <h3>Update User</h3>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={inputHandler}
              name="name"
              autoComplete="off"
              placeholder="Enter your Name"
              />
          </div>
          <div className="inputGroup">
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={inputHandler}
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
              />
          </div>
          <div className="inputGroup">
            <label htmlFor="name">Address:</label>
            <input
              type="text"
              id="address"
              value={user.address}
              onChange={inputHandler}
              name="address"
              autoComplete="off"
              placeholder="Enter your Address"
            />
          </div>
          <div className="inputGroup">
            <button type="submit" className="button_submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
