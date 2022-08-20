import React, { useState } from 'react';
import './Signup.css'
import { Link, useHistory } from "react-router-dom";
import HomePage from './HomePage';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [MissError, setMissError] = useState(false);
    const [UserExistError, setUserExistError] = useState(false);
    const [EmailExistError, setEmailExistError] = useState(false);
    const [PassLengthError, setPassLengthError] = useState(false);

    const handleName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the email change
      const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
          setMissError(true);
        } 
        else if(username === 'admin' || username === 'test'){
            setUserExistError(true);
        }
        else if(email === 'admin@gmail.com' || email === 'test@gmail.com'){
            setEmailExistError(true);
        }
        else if(password.length < 6 || password.length > 20){
            setPassLengthError(true);
        }
        else {
          setSubmitted(true);
          setMissError(false);
        }
      };
     
      // Showing success message
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h3>Đăng ký thành công!!</h3>
          </div>
        );
      };
     
      // Showing error message if error is true
      const MissErrorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: MissError ? '' : 'none',
            }}>
            <h3>LỖI: Thiếu thông tin</h3>
          </div>
        );
      };
    
      const UserExistErrorMessage = () => { 
        return (
            <div
              className="error"
              style={{
                display: UserExistError ? '' : 'none',
              }}>
              <h3>LỖI: UserName đã tồn tại</h3>
            </div>
          );
      }

      const EmailExistErrorMessage = () => { 
        return (
            <div
              className="error"
              style={{
                display: EmailExistError ? '' : 'none',
              }}>
              <h3>LỖI: Email đã tồn tại</h3>
            </div>
          );
      }

      const PassLengthErrorMessage = () => { 
        return (
            <div
              className="error"
              style={{
                display: PassLengthError ? '' : 'none',
              }}>
              <h3>LỖI: Mật khẩu phải chứa từ 6-20 ký tự</h3>
            </div>
          );
      }

    return (
        
        <div className='signup'>
            <Link to='/'>
                <img
                    className="signup__logo"
                    src='https://thumbs.dreamstime.com/z/online-shop-logo-designs-template-shopping-logo-vector-icon-illustration-design-shopping-bag-icon-online-shop-business-logo-197295042.jpg' 
                    alt='logo'
                />
            </Link>

            <div className='signup__container'>
                <h1>Đăng Ký</h1>

                <form>
                    <label className="label">User Name</label>
                    <input  className="input" onChange={handleName} value={username} type="text" />

                    <label className="label">E-mail</label>
                    <input  className="input" onChange={handleEmail} value={email} type="text" />

                    <label className="label">Mật khẩu</label>
                    <input  className="input" onChange={handlePassword} value={password} type="text" />

                    <div className="messages">
                        {MissErrorMessage()}
                        {successMessage()}
                        {UserExistErrorMessage()}
                        {EmailExistErrorMessage()}
                        {PassLengthErrorMessage()}
                    </div>

                    <button type='submit' className='signup__signInButton' onClick={handleSubmit}>OK</button>
                    
                </form>

            </div>
        </div>
    )
}

export default Signup