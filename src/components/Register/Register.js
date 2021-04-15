import { useState } from 'react';
import { register } from '../../services/authService';
import './Register.css';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [confirmPassErr, setConfirmPassErr] = useState({});

  const onRegisterFormSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    // const confirmpassword = e.target.confirmpassword.value;

    const isValid = formValidation();
    if (isValid) {
      register(name, email, password, phone, )
      .then(res => res.json())
      .then(() => history.push('/login'))
      .catch((error) => console.log('Error:', error));
    }
    console.log(email, password, phone, name);
  }

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const phoneErr = {};
    const passwordErr = {};
    const confirmPassErr = {};
    let isValid = true;

    if (name.trim().length < 4) {
      nameErr.nameShort = 'Name should be longer than 4 symbols';
      isValid = false;
    }

    if (phone.trim().length !== 10) {
      phoneErr.wrongPhone = 'Phone is not valid';
    }

    if (!email.includes('@')) {
      emailErr.invalidEmail = 'Email is not valid';
    }

    if (password.trim().length < 6) {
      passwordErr.passShort = 'Password should be longer that 6 symbols';
      isValid = false;
    }

    if (confirmPass !== password) {
      confirmPassErr.wrongPass = 'Repeat password is incorrect';
      isValid = false;
    }

     setNameErr(nameErr);
     setEmailErr(emailErr);
     setPhoneErr(phoneErr);
     setPasswordErr(passwordErr);
     setConfirmPassErr(confirmPassErr);
     return isValid;
  }

  return (
      <form className="register" onSubmit={onRegisterFormSubmitHandler}>
      <img className="img-reg-holder" src="/buro.jpg" alt="living room" />

      <div className="cont-reg-info">
      <h3>Register here</h3>
        <div className='mb-3'>
            <label htmlFor='name'>Designer name or firm</label>
            <input
              className='form-control'
              placeholder='Name'
              type='text'
              name='name'
              value={name}
             onChange={(e) => {setName(e.target.value)}} 
            />
            <br/>
            {Object.keys(nameErr).map((key) => {
              return <div key={nameErr[key]} style={{color : "red"}}>{nameErr[key]}</div>
            })}
        </div>

        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            className='form-control'
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}} 
          />
           <br/>
            {Object.keys(emailErr).map((key) => {
              return <div key={emailErr[key]} style={{color : "red"}}>{emailErr[key]}</div>
            })}
        </div>

        <div className='mb-3'>
          <label htmlFor='phone'>Enter your phone number</label>
          <input
            className='form-control'
            placeholder='Phone number'
            type='tel'
            name='phone'
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}} 
          />
          <br/>
            {Object.keys(phoneErr).map((key) => {
              return <div key={phoneErr[key]} style={{color : "red"}}>{phoneErr[key]}</div>
            })}
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
           <br/>
            {Object.keys(passwordErr).map((key) => {
              return <div key={passwordErr[key]} style={{color : "red"}}>{passwordErr[key]}</div>
            })}
        </div>

        <div className='mb-3'>
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='confirmpassword'
            value={confirmPass}
            onChange={(e) => {setConfirmPass(e.target.value)}}
          />
          <br/>
            {Object.keys(confirmPassErr).map((key) => {
              return <div key={confirmPassErr[key]} style={{color : "red"}}>{confirmPassErr[key]}</div>
            })}
        </div>

        <input className="submit-reg" type="submit" value="Create Account" />

        </div>
      </form>
 
  )
}

export default Register;
