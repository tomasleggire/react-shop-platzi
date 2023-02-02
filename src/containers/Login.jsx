import React from "react";

const Login = () => {
    return (
        <div clssName="login">
          <div clssName="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" clssName="logo" />
            <h1 clssName="title">Create a new password</h1>
            <p clssName="subtitle">Enter a new passwrd for yue account</p>
            <form action="/" clssName="form">
              <label for="password" clssName="label">Password</label>
              <input type="password" id="password" placeholder="*********" clssName="input input-password" />
              <label for="new-password" clssName="label">Password</label>
              <input type="password" id="new-password" placeholder="*********" clssName="input input-password" />
              <input type="submit" value="Confirm" clssName="primary-button login-button" />
            </form>
          </div>
        </div>
    );
}

export default Login;