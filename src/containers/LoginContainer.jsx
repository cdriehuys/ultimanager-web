import React from 'react';


const LoginContainer = () => (
  <div>
    <h1>Log In</h1>
    <form>
      <label htmlFor="username">Username:</label>
      <input name="username" /> <br />
      <label htmlFor="password">Password:</label>
      <input name="password" type="password" /> <br />

      <button type="submit">Log In</button>
    </form>
  </div>
);


export default LoginContainer;
