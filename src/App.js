import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CatalogPage from './components/GameCatalog/CatalogPage';
import CreateGame from './components/CreateGame';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import GameDetails from './components/GameCatalog/GameDetails';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/all-games' element={<CatalogPage />} />
                    <Route path='create-game' element={<CreateGame />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/all-games/game/:id' element={<GameDetails />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;