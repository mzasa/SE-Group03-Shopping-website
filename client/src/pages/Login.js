import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import Header from './Header';


function Login() {
    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [MissError, setMissError] = useState(false);
    const [UserExistError, setUserExistError] = useState(false);
    const [PassError, setPassError] = useState(false);

    const handleName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
          setMissError(true);
        } 
        else if(username !== 'admin' && username !== 'test'){
            setUserExistError(true);
        }
        else if((username === 'admin' && password !== 'admin123') || (username === 'test' && password !== 'test123')){
            setPassError(true);
        }
        else {
          setSubmitted(true);
          setMissError(false);
        }
      };

      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h3>Đăng nhập thành công!!</h3>
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

      const UserExistMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: UserExistError ? '' : 'none',
            }}>
            <h3>LỖI: User Name không tồn tại</h3>
          </div>
        );
      };

      const PassMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: PassError ? '' : 'none',
            }}>
            <h3>LỖI: Mật khẩu sai</h3>
          </div>
        );
      };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://thumbs.dreamstime.com/z/online-shop-logo-designs-template-shopping-logo-vector-icon-illustration-design-shopping-bag-icon-online-shop-business-logo-197295042.jpg' 
                    alt='logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Đăng Nhập</h1>

                <form>
                    <label className="label">User Name</label>
                    <input  className="input" onChange={handleName} value={username} type="text" />

                    <label className="label">Mật khẩu</label>
                    <input  className="input" onChange={handlePassword} value={password} type="text" />

                    <div className="messages">
                        {MissErrorMessage()}
                        {successMessage()}  
                        { UserExistMessage()}
                        { PassMessage()}
                    </div>

                    <button className='login__signInButton' onClick={handleSubmit}>OK</button>
                </form>
            <Link to ='/signup'>
                <button className='login__registerButton'>Tạo tài khoản</button>
            </Link>
            </div>
        </div>
    )
}

export default Login