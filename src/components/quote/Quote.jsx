import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, quote, character }) => (
  <section className="mainSection">
    <img src={image} alt={character} />
    <h3>{quote}</h3>
  </section>
);

Quote.propTypes = {
  image: PropTypes.string,
  quote: PropTypes.string,
  character: PropTypes.string,
};

export default Quote;
