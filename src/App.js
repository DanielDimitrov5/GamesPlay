import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CatalogPage from './components/GameCatalog/CatalogPage';
import CreateGame from './components/CreateGame';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import GameDetails from './components/GameDetails';


function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let [route, setRoute] = useState('/');

    function navigationChangeHandler(path) {
        setRoute(path);
    }

    function router() {

        const splitted = route.split('/');

        const page = splitted[1];
        const gameId = splitted[2];
        
        const routes = {
            '': <HomePage />,
            'all-games': <CatalogPage navigationChangeHandler={navigationChangeHandler} />,
            'create-game': <CreateGame />,
            'game': <GameDetails id={gameId}/>,
            'login': <Login />,
            'register': <Register />,
        }

        return routes[page];
    }

    if (isMobile) {
        return (
            <div>
                <h1>Still not anavailable for mobile divices</h1>
            </div>
        )
    }

    return (
        <div id="box">
            <Header navigationChangeHandler={navigationChangeHandler} />
            <main id="main-content">
                {router() || <h1>Not found</h1>}
            </main>
        </div>
    );
}

export default App;