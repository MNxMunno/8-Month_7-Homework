import React, { useEffect, useState } from "react";
import axios from "../../api";

const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("/users/search", { params: { limit: 1000 } }).then((res) => {
      console.log(res.data.data.users);
      setUsers(res.data.data.users);
    });
  }, []);

  const card = users?.map((user) => {
    <div key={user.id}>
      <h3>{user.FirstName}</h3>
      <h3>{user.LastName}</h3>
    </div>;
  });
  return <div>{card}</div>;
};

export default Users;
