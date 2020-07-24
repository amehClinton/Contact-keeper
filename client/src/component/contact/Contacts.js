import React, { Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import Spinner from "../Layout/Spinner";
import { getContacts } from "../../actions/contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Contacts = ({
  contact: { contacts, loading, filtered },
  getContacts,
}) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
Contacts.propType = {
  contact: PropTypes.object.isRequired,
  getContacts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
