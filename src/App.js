import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CatalogPage from './components/GameCatalog/CatalogPage';
import CreateGame from './components/CreateGame';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';


function App() {

    let [route, setRoute] = useState('/');

    const routes = {
        '/': <HomePage />,
        '/all-games': <CatalogPage />,
        '/create-game': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />,

    }

    function navigationChangeHandler(path) {
        setRoute(path);
    }

    return (
        <div id="box">
            <Header navigationChangeHandler={navigationChangeHandler} />
            <main id="main-content">
                { routes[route] }
            </main>
        </div>
    );
}

export default App;