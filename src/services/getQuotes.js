export const getQuotes = async () => {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const json = await response.json();

  return {
    character: json[0].character,
    quote: json[0].quote,
    image: json[0].image,
  };
};
