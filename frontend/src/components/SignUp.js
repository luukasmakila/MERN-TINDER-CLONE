import { useState } from "react";
import axios from "../axios";
import { Link, Navigate } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = ({ History }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [bio, setBio] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const registerHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        setError('')
      }, 5000);
      return setError("Passwords do not match")
    }

    try {
      const { data } = await axios.post(
        '/api/auth/sign_up',
        {
          email,
          password,
          name,
          imgUrl,
          bio
        },
        config
      )
      localStorage.setItem('userId', data.id)
      localStorage.setItem('authToken', data.token)
      setSuccess(true)

    } catch (error) {
      console.log(error)
      setError(error.response.data.error)
      setSuccess(false)
      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }

  if(success) {
    return <Navigate to='/'/>
  }
 
  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Sign Up</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <h3 className="register-screen__title">Profile Info</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Image URL:</label>
          <input
            type="text"
            required
            id="imgUrl"
            placeholder="Paste the link to your picture"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Bio:</label>
          <input
            type="text"
            required
            id="bio"
            placeholder="Write your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;