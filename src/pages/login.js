import React from "react";
const Login = ({ history }) => {
  return (
    <div>
      This is login page! <br />
      <button onClick={() => history.push("/app/dashboard")}>Login</button>
    </div>
  );
};
export default Login;
