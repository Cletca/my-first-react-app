import './artistPageLI.css';

import FavIcon from '@mui/icons-material/AddCircleOutline';

import { useState } from 'react';

interface ArtistPageLiProps {
    id: number;
    name: string;
    views: number;
    time: number;
}

export default function ArtistPageLI({ id, name, views, time } : ArtistPageLiProps) {

    const [hover, setHover] = useState(true);

    return (
        <li
            className="artist-page-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="card-container">
                <span className="card-number">{id}</span>
                <img src="#" alt="#"/>
                <div className="card-content">
                    <div className="card-name-views">
                        <span className="card-title">{name}</span>
                        <span className="card-views">{views}</span>
                    </div>
                    <div className="card-btns">
                        <button className={`fav-btn ${hover ? "visible" : ""}`}> <FavIcon /> </button>
                        <span className="song-time">{time}</span>
                        <button className={`song-options ${hover ? "visible" : ""}`}>⋯</button>
                    </div>
                </div>
            </div>
        </li>
    )
}