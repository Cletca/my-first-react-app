import './css/musicCard.css';

import { Button } from "@mui/material";

export interface MusicCardProps {
    image: string;
    name: string;
    author: string;
    views: string;
    onClick: () => void;
}

export default function MusicCard({ image, name, author, views, onClick}: MusicCardProps) {

    return (
        <div className="music-card-container" onClick={onClick}>

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

        </div>
    )
}