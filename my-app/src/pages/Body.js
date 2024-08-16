import React from 'react'

function Body() {
  return (
    <div className='wrapper'>
      <div className="form-box register">
        <form action="">
            <h1>milestone</h1>
            <h2>Register</h2>
        <div className="input-box">
        <input type="text" id="email" placeholder="Email"
        required/>
        <i className='bx bxs-envelope'></i>
        </div>
    <div className="input-box">
        <input type="text" id="username" placeholder="Username"
        required/>
        <i className='bx bxs-user'></i>
    </div>
    <div className="input-box">
        <input type="password" id="password"
        placeholder="Password" required/>
        <i className='bx bxs-lock-alt'></i>
        </div>

        <div className="remember-forgot">
            <label><input type="checkbox"/>I accept the terms & conditions</label>
        </div>

        <button type="submit" className="btn">Register</button>
        <div className="login-link">
            <p>Already have an account? <a href="#" className="login-link">Login</a></p>
        </div>
            </form>
        </div>
    </div>
  );
}

export default Body;
