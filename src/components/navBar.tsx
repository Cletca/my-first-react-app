import './navBar.css';

import { Button } from '@mui/material';

import DashBtn from "./dashBtn.tsx";
import SearchBox from "./Search.tsx";
import { MusicList } from '../data/Music.ts';

import {NavigationContext} from "../navigationContext.tsx";
import {useContext} from "react";

type NavBarProps = {
    toggleMenu: () => void;
};

export default function NavBar({toggleMenu}: NavBarProps) {
    const tracks = MusicList;

    const navContext = useContext(NavigationContext);

    if (!navContext) return null;

    const { setCurrentPage } = navContext;

    return (
        <nav>
            <div className="navbar-btns">
                <ul className="navbar-btn-list">
                    <li className="menu-btn">
                        <Button variant="text" color="primary" onClick={toggleMenu}>
                            <img src="../../Img/Logo.png" alt="Logo" style={{ width: '35px' }} />
                        </Button>
                    </li>
                    <li className="home-btn">
                        <Button onClick={() => setCurrentPage("home")} variant="text" color="success">Home</Button>
                    </li>
                    <li className="playlists-btn">
                        <Button onClick={() => setCurrentPage("playlist")} variant="text" color="success">Playlist</Button>
                    </li>
                    <li className="artistt-btn">
                        <Button variant="text" color="success">Artist</Button>
                    </li>
                </ul>
            </div>

            <div className="navbar-search">
                <SearchBox tracks={tracks} />
            </div>

            <div className="navbar-profile">
                <DashBtn />
            </div>
        </nav>
    );
}