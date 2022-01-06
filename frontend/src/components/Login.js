import { useState, useEffect } from "react"
import axios from "../axios"
import { Link, Navigate } from "react-router-dom"
import "../styles/Login.css"

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      return <Navigate to='/'/>
    }
  }, [history])

  const loginHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    }

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      )
      localStorage.setItem('userId', data.id)
      localStorage.setItem('authToken', data.token)
      setSuccess(true)
      
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("")
      }, 5000);
    }
  }

  if(success) {
    return <Navigate to='/'/>
  }

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/sign_up">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login