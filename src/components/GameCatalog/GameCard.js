function GameCard({game, navigationChangeHandler}) {

  function clickDetailHendler(e){
    e.preventDefault();

        if(e.target.tagName === 'A'){
            const url = new URL(e.target.href);
            navigationChangeHandler(url.pathname);
        }
  }

    return (
        <div className="allGames">
          <div className="allGames-info">
            <img src={game.imageUrl} alt="no picture"/>
            <h6>{game.category}</h6>
            <h2>{game.title}</h2>
            <a onClick={clickDetailHendler} href={`game/${game._id}`} className="details-button">Details</a>
          </div>
        </div>
    );
}

export default GameCard;