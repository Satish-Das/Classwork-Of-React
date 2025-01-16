import React from "react";

function ApiCallSimulator() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Rk University Students",
        user: ["John", "Emma", "Sophia", "Liam", "Olivia"],
      });
    }, 5000);
  }, []);
}

function ApiTesting() {
  const [id, setId] = React.useState("Loading...");
  const [name, setName] = React.useState("Loading...");
  const [user, setUser] = React.useState(["Loading..."]);

  React.useEffect(() => {
    ApiCallSimulator().then((user) => {
      setId(user.id);
      setName(user.name);
      setUser(user.user);
    });
  });

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>
        User:
        <ul>
          {user.map((item, index) => (
             <li key={index}>{item}</li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default ApiTesting;
