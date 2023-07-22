import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(props) {

    const navigate = useNavigate();

    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    var pass;
  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
      await fetch(`http://localhost:3000/api/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          pass = data.password;
          handleChange();
        });
    }
  
    function handleChange() {
      console.log(pass);
      if(password == pass){
        props.setLogged(true);
        navigate("/");
      }
      else{
        alert("Invalid Credentials !!")
      }
    }

  return (
    <div className='container my-3'  style={{width: '70%', display: props.logged===true?'none':'block'}}>
      <section className="page-section" id="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0" style={{fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: '45px', letterSpacing: '2px'}}><u>Login</u></h2>
              <hr className="divider my-4"/>
            </div>
          </div>
          <div className="row justify-content-center">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail1" style={{fontSize: '30px'}}>Email address<span style={{color: 'red'}}>*</span></label>
                <input type="email" className="form-control my-1" name="email" id="inputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}} required/>
                <small id="emailHelp" className="form-text text-muted" style={{color: 'white'}}>We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group my-4">
                <label htmlFor="inputPassword1" style={{fontSize: '30px'}}>Password</label>
                <input type="password" className="form-control my-1" name="password" id="inputPassword1" onChange={(e) => {setPassword(e.target.value)}} required/>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-outline-light my-2" onClick={handleLogin} style={{fontSize: '25px'}}>Login</button>
              </div>
              <hr className="divider my-4"/>
              <div className="text-center">
              New to Educationist?<Link className="medium mx-2" to="/register" style={{cursor: 'pointer', color: 'aqua'}}>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
