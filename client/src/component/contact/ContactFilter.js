import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContacts } from "../../actions/contact";
import { clearFilter } from "../../actions/contact";

const ContactFilter = ({ filterContacts, clearFilter, auth: { filtered } }) => {
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

ContactFilter.PropType = {
  auth: PropTypes.object.isRequired,
  filterContacts: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { filterContacts, clearFilter })(
  ContactFilter
);
