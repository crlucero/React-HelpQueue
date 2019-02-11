import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props) {
    var styledCompStyles = {
        borderStyle: 'solid',
        fontFamily: 'sans-serif',
        paddingTop: '50px'
    }
  return (
    <div style={styledCompStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr />
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket;