import React, { useEffect } from "react";
import Contacts from "../contact/Contacts";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import PropTypes from "prop-types";

const Dashboard = () => {
  useEffect(() => {
    loadUser();
    // eslint-diable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div></div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
Dashboard.propType = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, loadUser)(Dashboard);
