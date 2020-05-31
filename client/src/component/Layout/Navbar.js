import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, loadUser } from "../../actions/auth";

const Navbar = ({ title, icon, isAuthenticated, logout, user }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='navbar bg-primary'>
        <h1>
          <Link to='/'>
            <i className={icon} /> {title}
          </Link>
        </h1>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </Fragment>
  );
};

Navbar.PropType = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object.isRequired,
};
Navbar.defaultProps = {
  title: "Contact keeper",
  icon: "fas fa-id-card-alt",
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
