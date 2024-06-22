import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
};

const Register = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.phones = [formData.phones];
    console.log(formData);
    axios.post("/auth/user/sign-up", formData);
    setFormData(initialState);
  };

  return (
    <section className="container">
      <h1>login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between flex-col items-center gap-8"
      >
        <input
          className="outline-none border-black bg-red"
          type="text"
          placeholder="Username"
          name="UserName"
          value={formData.UserName}
          onChange={handleChange}
        />
        <input
          className="outline-none border-black bg-red"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="outline-none border-black bg-red"
          type="text"
          placeholder="FirstName"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
        />
        <input
          className="outline-none border-black bg-red"
          type="text"
          placeholder="LastName"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
        />
        <input
          className="outline-none border-black bg-red"
          type="number"
          placeholder="Number"
          name="phones"
          value={formData.phones}
          onChange={handleChange}
        />
        <button>Sign up</button>
      </form>
    </section>
  );
};

export default Register;
