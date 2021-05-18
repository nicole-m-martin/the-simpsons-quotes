import React, { useState } from 'react';
import { getQuotes } from '../services/getQuotes';
import Header from '../components/headers/Header';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState({});

  const clickHandler = async () => {
    const quote = await getQuotes();
    setQuote(quote);
  };

  return (
    <main>
      <Header />
      <Load onClick={clickHandler} />
      <Quote
        image={quote.image}
        quote={quote.quote}
        character={quote.character}
      />
    </main>
  );
};

export default SimpsonsQuotes;
