import React, {useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current!.value, passwordRef.current!.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return(
    <div>
      <h1>Login</h1>

      { error && <p>{error}</p> }

      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input ref={emailRef} type="email" required />
        <p>Password</p>
        <input ref={passwordRef} type="password" required />
        <button type="submit" disabled={loading}>Log In</button>
      </form>

      <p>Haven't got an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  )
}