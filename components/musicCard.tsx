import './musicCard.css';

import { Button } from "@mui/material";
import {usePlayer} from "../src/playerContext.tsx";

export interface MusicCardProps {
    id: number;
    image: string;
    src: string;
    name: string;
    author: string;
    views: string;
}

export default function MusicCard({ id, image, name, author, views }: MusicCardProps) {
    const playerContext = usePlayer();

    function handleCardClick() {
        playerContext?.setCurrentTrack(id, name, image);
    }

    return (
        <button className="music-card-container" onClick={handleCardClick}>

            <div className="music-card-img">
                <img src={image} alt="Photo" />
            </div>

            <div className="music-card-description">

                <div className="track-name-container">
                    <p className="track-name">
                        {name}
                    </p>
                </div>

                <div className="track-description">
                    <Button variant="text" sx={{
                        color: 'gray',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    >
                        {author}
                    </Button>

                    <span className="number-of-views">
                        {views}
                    </span>
                </div>

            </div>

        </button>
    )
}