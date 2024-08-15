import React from 'react'

export default function Body() {
  return (
    <div class='wrapper'>
      <div class="form-box register">
        <form action="">
            <h1>milestone</h1>
            <h2>Register</h2>
        <div class="input-box">
        <input type="text" id="email" placeholder="Email"
        required/>
        <i class='bx bxs-envelope'></i>
        </div>
    <div class="input-box">
        <input type="text" id="username" placeholder="Username"
        required/>
        <i class='bx bxs-user'></i>
    </div>
    <div class="input-box">
        <input type="password" id="password"
        placeholder="Password" required/>
        <i class='bx bxs-lock-alt'></i>
        </div>

        <div class="remember-forgot">
            <label><input type="checkbox"/>I accept the terms & conditions</label>
        </div>

        <button type="submit" class="btn">Register</button>
        <div class="login-link">
            <p>Already have an account? <a href="#" class="login-link">Login</a></p>
        </div>
            </form>
        </div>
    </div>
  )
}
