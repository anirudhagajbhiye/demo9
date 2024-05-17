import classes from "./Login.module.css";
import Card from "./Card";
import { useState } from "react";
import Button from "./Button";

function Login(props) {
  // Whenever I type it save somewhere and
  // for checking email and password valid or not
  // so for that we are using two const variables

  //This two const variables is for entered email to check valid or not
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsvalid, setEmailIsValid] = useState();

  //This two const variables is for entered password to check valid or not
  const [enteredPassword, setEnteredPassword] = useState("");
  const [PasswordIsvalid, setPasswordIsValid] = useState();

  //if either the email is valid or not

  const [formIsValid, setFormIsValid] = useState(false);

  //whenever I type it should be saved for that we are using two functions

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log("emailChangeHandler", event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 7
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log("passwordChangeHandler", event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 7
    );
  };
  //   when we remove cursor that event is called onBlur
  //   so we using that event as a function

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    console.log("I am inside validate Password Handler");
    const value = enteredPassword.length > 7 ? true : false;
    console.log("value>>", value);
    setPasswordIsValid(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div
          className={`${classes.control} ${
            PasswordIsvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={validatePasswordHandler}
          ></input>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
