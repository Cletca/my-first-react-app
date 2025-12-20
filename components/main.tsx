import './main.css';

import { Button } from '@mui/material';

type MainProps = {
    isMenuOpen: boolean;
};

import { useState } from 'react';

import ForUser from './ForUser';
import ArtistsTop from "./artistsTop.tsx";
import MusicPlayer from './MusicPlayer';
import AlbumList from "./albumUL.tsx";

import ArtistPage from "./artistPageLI.tsx";

import {PlayerProvider} from "../src/playerContext.tsx";

export default function Main({isMenuOpen}: MainProps) {

    const [currentId, setCurrentId] = useState<number | null>(null);

    return (
        <div className="main">

            <div className={`main-left ${isMenuOpen ? 'open' : 'closed'}`}>
                <ul>

                    <li>
                        <Button>Home</Button>
                    </li>
                    <li>
                        <Button>Library</Button>
                    </li>

                    <li>
                        <Button>History</Button>
                    </li>
                    <li>
                        <Button>Playlists</Button>
                    </li>
                    <li>
                        <Button>Liked Songs</Button>
                    </li>
                    <li>
                        <Button>Downloads</Button>
                    </li>

                </ul>
            </div>

             <PlayerProvider>
                <div className="main-center" style={{ paddingLeft:  isMenuOpen ? '250px' : '43px' }}>
                    {/*
                    <ForUser />
                    <ArtistsTop />
                    <MusicPlayer />
                    <AlbumList />
                    */}
                    <ArtistPage />
                </div>
            </PlayerProvider>

            <div className="main-right">

            </div>
        </div>
    );
}