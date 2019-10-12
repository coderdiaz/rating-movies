import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    authorized: false,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    // TODO: Lanzar una petición de verificación de token
    if (token) {
      this.setState({ authorized: true });
    }
  }

  logoutHandle = () => {
    this.setState({ authorized: false });
    localStorage.removeItem('token');
  }
    
  render() {
    return <header className="header py-3 bg-info">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="pr-3 text-white">Logo</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="pr-3 text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="pr-3 text-white">Movies</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="nav justify-content-end">
              { this.state.authorized ? <li className="nav-item">
                <button className="btn btn-link p-0 pr-3 text-white" onClick={this.logoutHandle}>Logout</button>
              </li> : <>
                <li className="nav-item">
                  <Link to="/login" className="pr-3 text-white">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="pr-3 text-white">Sign Up</Link>
                </li>
              </> }
            </ul>
          </div>
        </div>
      </div>
    </header>
  }
}

export default Header;
