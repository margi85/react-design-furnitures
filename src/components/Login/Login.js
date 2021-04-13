import './Login.css';
import { login } from '../../services/authService';

const Login = ({
  history
}) => {
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
        localStorage.setItem('user', JSON.stringify(data));
        history.push('/');
      });
  }

  return (
    <form className="login-page" onSubmit={onLoginFormSubmitHandler}>
      <img className="img-login-holder" src="/buro.jpg" alt="living room" />

      <div className="cont-login-info">
        <legend>Login</legend>
        <p className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </p>
        <p className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </p>
        <input className="submit-login" type="submit" value="Login" />
      </div>
    </form>

  );
};

export default Login;
