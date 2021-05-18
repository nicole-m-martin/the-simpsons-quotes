import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Load.module.css';

const Load = ({ onClick }) => (
  <main className={style.main}>
    <h3 className={style.btnText}>Click Button For A Random Quote</h3>
    <button className={style.btn} type="button" onClick={onClick}>
      ¡Ay, caramba!
    </button>
  </main>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
