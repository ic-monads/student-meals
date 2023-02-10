import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      setError("Passwords must match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current!.value, passwordRef.current!.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return(
    <div>
      <h1>Sign Up</h1>

      { error && <p>{error}</p> }

      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input ref={emailRef} type="email" required />
        <p>Password</p>
        <input ref={passwordRef} type="password" required />
        <p>Confirm Password</p>
        <input ref={passwordConfirmRef} type="password" required />
        <button type="submit" disabled={loading}>Sign Up</button>
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}