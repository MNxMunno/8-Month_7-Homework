import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
};

const Register = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFormData(initialState);
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
          type="password"
          placeholder="Password"
          name="First Name"
          value={formData.FirstName}
          onChange={handleChange}
        />
        <input
          className="outline-none border-black bg-red"
          type="password"
          placeholder="LastName"
          name="Last Name"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Sign up</button>
      </form>
    </section>
  );
};

export default Register;
