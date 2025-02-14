import './loginpage.css'
import React, { useState, useEffect } from 'react';

function LoginPage() {

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='login-page'>
      <div className='login'>
        <div className='login-title'>
          Se connecter
        </div>
        <div className='login-box'>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-part'>
              <label className='label-form' htmlFor="login">LOGIN:</label>
              <input
                className='input-form'
                type="text"
                id="login"
                name="login"
                value={formData.login}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-part'>
              <label className='label-form' htmlFor="password">PASSWORD:</label>
              <input
                className='input-form'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="login-button" type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
