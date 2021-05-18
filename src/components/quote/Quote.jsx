import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Quote.module.css';

const Quote = ({ image, quote, character }) => (
  <section className={style.mainBox}>
    <img className={style.image} src={image} alt={character} />
    <h3 className={style.quoteText}>{quote}</h3>
    <h2 className={style.charText}>{character}</h2>
  </section>
);

Quote.propTypes = {
  image: PropTypes.string,
  quote: PropTypes.string,
  character: PropTypes.string,
};

export default Quote;
