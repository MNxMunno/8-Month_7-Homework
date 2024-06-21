import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("/auth/sign-in", formData).then((res) => {
      console.log(res);
      // localStorage.setItem("x-auth-token", res.data.data.token);
    });

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
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
