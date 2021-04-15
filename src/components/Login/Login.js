import './Login.css';
import { login } from '../../services/authService';
import { useState } from 'react';

const Login = ({
  history
}) => {
  const [error, setError] = useState('');

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    login(email, password)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        if (data.code) {
          setError(data.message);
        } else {
          localStorage.setItem('user', JSON.stringify(data));
          window.location.replace('/')
        };
      })
      .catch((error) => console.log('Error:', error));
  }

  return (
    <form className="login-page" onSubmit={onLoginFormSubmitHandler}>
      <img className="img-login-holder" src="/buro.jpg" alt="living room" />

      <div className="cont-login-info">
        <legend>Login</legend>
        <p className="field">
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <br />

        </p>
        <p className="field">
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <br />
        </p>
        <input className="submit-login" type="submit" value="Login" />
        <div style={{color : "red"}}>{error}</div>
      </div>
    </form>

  );
};

export default Login;
