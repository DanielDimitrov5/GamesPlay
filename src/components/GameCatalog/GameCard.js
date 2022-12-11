function GameCard({
  image,
  categoty,
  name,
}) {
    return (
        <div className="allGames">
          <div className="allGames-info">
            <img src={image} />
            <h6>{categoty}</h6>
            <h2>{name}</h2>
            <a href="#" className="details-button">Details</a>
          </div>
        </div>
    );
}

export default GameCard;