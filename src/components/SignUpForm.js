import React from "react";

// import "./SignUpForm.css";

function SignUpForm(props) {
  return (
    <div>
      <h2>Sign Up</h2>

      <form>
      <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="text" name="email" onChange={props.handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" onChange={props.handleInput} />
        </div>
        <input value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div>
  );
}

export default SignUpForm;
