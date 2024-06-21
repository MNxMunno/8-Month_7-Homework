import React, { useEffect } from "react";
import axios from "../../api";

const Users = () => {
  useEffect(() => {
    axios.get("/users/search", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-auth-token")}}`,
      },
    });
  }, []);
  return <div>Users</div>;
};

export default Users;
