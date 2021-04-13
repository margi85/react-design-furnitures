import { register } from '../../services/authService';
import './Register.css';

const Register = ({ history }) => {

  const onRegisterFormSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    // const confirmpassword = e.target.confirmpassword.value;

    console.log(email, password, phone, name);

    register(name, email, password, phone, )
      .then(res => res.json())
      .then(() => history.push('/login'));
  }

  return (
      <form className="register" onSubmit={onRegisterFormSubmitHandler}>
      <img className="img-reg-holder" src="/buro.jpg" alt="living room" />

      <div className="cont-reg-info">
      <h3>Register here</h3>
        <div className='mb-3'>
            <label htmlFor='firstName'>Designer name or firm</label>
            <input
              className='form-control'
              placeholder='Name'
              type='text'
              name='name'
            />
        </div>

        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            className='form-control'
            placeholder='Email'
            type='email'
            name='email'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='phone'>Enter your phone number</label>
          <input
            className='form-control'
            placeholder='Phone number'
            type='tel'
            name='phone'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='password'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='confirmpassword'
          />
        </div>


        <input className="submit-reg" type="submit" value="Create Account" />

        </div>
      </form>
 
  )
}

export default Register;
