import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import './CatalogPage.css'
import { getAll } from '../../services/FetchData.js';

function CatalogPage({navigationChangeHandler}) {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        setTimeout(() => {
            getAll()
                .then(game => {
                    setGames(game);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                },);
        }, 250)
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
                games.length > 0 ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}

export default CatalogPage;