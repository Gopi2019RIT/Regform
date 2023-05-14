import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser,FaCheck } from "react-icons/fa";
import './App.css';
//import { Link } from 'react-router-dom';

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [person, setPerson] = useState("");
  const [personError, setPersonError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);

  /*function validateEmail() {
    if (!email) {
      setEmailError("Email is required");
    } else if (email !== "abc@gmail.com") {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }*/
  function validateEmail() {
    //const emailInput = document.getElementById("email");
    //const email = emailInput.value.trim();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }
  

  function validatePerson() {
    if (!person) {
      setPersonError("Person is required");
    } else {
      setPersonError("");
    }
  }

  function validatePassword() {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must contain a number");
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("Password must contain a special character");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain an uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain a lowercase letter");
    } else {
      setPasswordError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    setHasUppercase(/[A-Z]/.test(value));
    setHasLowercase(/[a-z]/.test(value));
    setHasNumber(/\d/.test(value));
    setHasSpecial(/[!@#$%^&*]/.test(value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateEmail();
    validatePerson();
    validatePassword();
  }

  return (
    <div className="container">
      <div className="logo">ρ 
    </div>
    <div className="abc"><p>presentations.AI</p></div>
      <div className="form-container">
        
        <div className="account">
          <p>Create an Account</p>
        </div>
        <div className="credit">
        <p>No credit card required</p>
        </div>
        <form onSubmit={handleSubmit}>

          <div>
            <label>
              <FaEnvelope />
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <div style={{ color: "red" }}>{emailError}</div>
          </div>
          <div>
            <label>
              <FaUser />
            </label>
            <input
              type="text"
              placeholder="Person"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              onBlur={validatePerson}
            />
            <div style={{ color: "red" }}>{personError}</div>
          </div>
          <div>
            <label>
              <FaLock />
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              />
              <div style={{ color: "red" }}>{passwordError}</div>
              <div className="password-strength">
              {password && (
              <>
              <div className={hasLowercase ? "valid" : "invalid"}>
              <FaCheck />
              One lowercase letter
              </div>
              <div className={hasUppercase ? "valid" : "invalid"}>
              <FaCheck />
              One uppercase letter
              </div>
              <div className={hasNumber ? "valid" : "invalid"}>
              <FaCheck />
              One number
              </div>
              <div className={hasSpecial ? "valid" : "invalid"}>
              <FaCheck />
              One special character
              </div>
              <div className={password.length >= 8 ? "valid" : "invalid"}>
  <FaCheck />
   8 characters minimum
</div>

              </>
              )}
              </div>
              </div>
              <button type="submit">Sign up</button>
              </form>
              <div className="AI">By signing up,I agree to the Presentation.
              AI Privacy Policy
and Terms</div>
              </div>
              <div className="signin">Already have an account?
              
             <button type="submit">Sign In</button></div>
              </div>
              );
              }
              
              export default SignUpForm;
