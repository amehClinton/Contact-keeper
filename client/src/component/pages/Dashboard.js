import React, { useEffect } from "react";
import Contacts from "../contact/Contacts";
import ContactForm from "../contact/ContactForm";
import ContactFilter from "../contact/ContactFilter";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import PropTypes from "prop-types";

const Dashboard = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-diable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};
Dashboard.propType = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Dashboard);
