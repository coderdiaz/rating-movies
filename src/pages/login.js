import React from "react";
import axios from "axios";
import BaseLayout from "../layouts/BaseLayout";

const LoginPage = ({ history }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://warm-temple-02428.herokuapp.com/auth/login`, { email, password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        history.push("/");
      })
      .catch(err => console.error(err));
  }

  const emailInputHandle = (e) => {
    setEmail(e.target.value);
  }

  const passwordInputHandle = (e) => {
    setPassword(e.target.value);
  }

  return <BaseLayout>
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="hello@email.com"
                  onChange={(e) => emailInputHandle(e)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => passwordInputHandle(e)} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
};

export default LoginPage;
