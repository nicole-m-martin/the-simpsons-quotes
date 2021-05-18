import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <main>
    <h3>Click Button For A Random Quote</h3>
    <button type="button" onClick={onClick}>
      ¡Ay, caramba!
    </button>
  </main>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
