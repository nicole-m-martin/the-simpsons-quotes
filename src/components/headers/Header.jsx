import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import simpsons from '../../images/The_logo_simpsons_yellow.png';

function Header({ title }) {
  return (
    <nav className={style.headerContainer}>
      <img className={style.simpsons} alt="simpsons logo" src={simpsons} />
      <h1 className={style.title}>{title}</h1>
    </nav>
  );
}

Header.defaultProps = {
  title: 'The Simpson Quotes On Demand!',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
