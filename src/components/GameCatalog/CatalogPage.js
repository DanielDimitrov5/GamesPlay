import GameCard from "./GameCard";

function CatalogPage(){
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        <GameCard image={'./images/avatar-1.jpg'} category={'Action'} name={'Cover Fire'}/>
        <GameCard image={'./images/avatar-1.jpg'} category={'Action'} name={'Cover Fire'}/>
        <GameCard image={'./images/avatar-1.jpg'} category={'Action'} name={'Cover Fire'}/>
        <h3 className="no-articles">No articles yet</h3>
      </section>
    );
}

export default CatalogPage;