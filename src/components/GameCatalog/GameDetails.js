import { useState, useEffect } from "react";
import { getGameById } from "../../services/FetchData";
import Comment from "./Comment";
import { useParams } from 'react-router-dom';
import minecraft from "../GameCatalog/games/minecraft.json"
import { v4 as idGenerator } from 'uuid';

function GameDetails() {
    const id = useParams().id;

    const [game, setGame] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [comments, SetCommetns] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000)

        getGameById(id)
            .then(result => {
                setGame(result);
                clearTimeout(timer);

                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setGame(minecraft[0]);
                clearTimeout(timer);

                setLoading(false);
            });

    }, [])

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (inputValue === '') {
            return;
        }

        const comment = (
            <Comment key={idGenerator()} inputValue={inputValue} />
        )
            console.log(comment.key)
        let commentsCollection = [comments];
        commentsCollection.push(comment);

        SetCommetns(commentsCollection);

        setInputValue('');
    }


    if (loading) {
        return (
            <div className="lds-circle"><div></div></div>
        )
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments.length > 0 ? <ul>{comments}</ul>
                        : <p className="no-comment">No comments.</p>
                    }
                </div>
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={handleSubmit}>
                    <textarea name="comment" placeholder="Comment......" value={inputValue} onChange={handleChange}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}

export default GameDetails;