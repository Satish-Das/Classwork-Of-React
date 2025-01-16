import * as React from "React";

function ApiCallSimulator() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Rk University Students" });
    }, 5000);
  });
}

function ApiTesting() {
  const [id, setId] = React.useState("Loading...");
  const [name, setName] = React.useState("Loading...");

  React.useEffect(() => {
    ApiCallSimulator().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  });

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
    </div>
  );
  
}


export default ApiTesting;
