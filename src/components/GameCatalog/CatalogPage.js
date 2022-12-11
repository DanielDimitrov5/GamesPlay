import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import './CatalogPage.css'

function CatalogPage() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        setTimeout(() => {
            fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
                .then(response => response.json())
                .then(game => {
                    setGames(game);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                },);
        }, 1000)
    }, []);

    if (loading) {
        return (
            <div className="lds-circle"><div></div></div>
        )
    }

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {
                games.length > 0 ? games.map(x => <GameCard key={x._id} game={x} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}

export default CatalogPage;