import './main.css';

import { Button } from '@mui/material';

type MainProps = {
    isMenuOpen: boolean;
};

import {useContext} from 'react';

import HomePage from "./pages/homePage/homePage.tsx";
import ArtistPage from "./pages/artistPage.tsx";
import MusicPlayer from "./UI-Components/musicPlayer.tsx";

import {NavigationContext} from "../navigationContext.tsx";

export default function Main({isMenuOpen}: MainProps) {

    const navContext = useContext(NavigationContext);

    if (!navContext) return null;

    const { currentPage, setCurrentPage } = navContext;

    console.log(currentPage);

    return (
        <div className="main">

            <div className={`main-left ${isMenuOpen ? 'open' : 'closed'}`}>
                <ul>

                    <li>
                        <Button onClick={() => setCurrentPage("home")}>Home</Button>
                    </li>
                    <li>
                        <Button>Library</Button>
                    </li>

                    <li>
                        <Button>History</Button>
                    </li>
                    <li>
                        <Button onClick={() => setCurrentPage("playlist")}>Playlists</Button>
                    </li>
                    <li>
                        <Button>Liked Songs</Button>
                    </li>
                    <li>
                        <Button>Downloads</Button>
                    </li>

                </ul>
            </div>

                <div className="main-center" style={{ paddingLeft:  isMenuOpen ? '250px' : '43px' }}>
                    {currentPage === "home" && <HomePage />}
                    {currentPage === "artist" && <ArtistPage />}
                    {/*{currentPage === "playlist" && <PlaylistPage />}*/}
                    <MusicPlayer />
                </div>

            <div className="main-right">

            </div>
        </div>
    );
}