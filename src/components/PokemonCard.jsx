import PropTypes from "prop-types";

function PokemonCard(props) {
  const pokemon = props.thePokemonProp;

  return (
    <>
      <figure>
        {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} alt={pokemon.name} />}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  )
    ;
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;
