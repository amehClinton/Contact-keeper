import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contact";

import ContactItem from "./ContactItem";
import { connect } from "react-redux";

const Contacts = ({
  contact: { contacts, filtered, loading },
  getContacts,
}) => {
  useEffect(() => {
    getContacts();

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h4>Loading....</h4>;
  }
  return (
    <Fragment>
      {!loading && contacts.length === 0 ? (
        <p className='center'>No Contacts To show</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </Fragment>
  );
};
Contacts.PropType = {
  contacts: PropTypes.object,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});
export default connect(mapStateToProps, { getContacts })(Contacts);
