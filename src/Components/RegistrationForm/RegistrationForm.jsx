import React from 'react';
import './RegistrationForm.css'; 
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className="registration-wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-boxes">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-boxes">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-boxes">
          <input type="text" placeholder="Contact Number" required />
        </div>
        <div className="input-boxes">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-boxes">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="input-boxes">
          <select required>
            <option value="">Select User Type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-link">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
