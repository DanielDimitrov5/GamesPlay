import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CatalogPage from './components/GameCatalog/CatalogPage';
import CreateGame from './components/CreateGame';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';


function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 1024);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    if(isMobile) {
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
                { routes[route] }
            </main>
        </div>
    );
}

export default App;