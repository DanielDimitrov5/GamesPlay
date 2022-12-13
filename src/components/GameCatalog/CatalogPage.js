import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import './CatalogPage.css'
import { getAll } from '../../services/FetchData.js';
import minecraft  from "../GameCatalog/games/minecraft.json"

function CatalogPage({ navigationChangeHandler }) {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            // Set games to if the function takes more than 7 seconds
            setLoading(false);
            alert("Server is down! Fake data!")
            setGames(minecraft); //fake data
        }, 7000);

        getAll()
            .then(game => {
                setGames(game);
                setLoading(false);
                // Clear the timeout if the function completes before 7 seconds
                clearTimeout(timeout);
            })
            .catch(error => {
                console.log(error);
            },);
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