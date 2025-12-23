import './artistPage.css';

// MUI Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// MUI Components
import { Avatar } from "@mui/material";

// Hooks
import { useEffect, useState } from "react";

// Components
import ArtistAlbumList from "./artistAlbumUL.tsx";

import ArtistTrackUL from "./ArtistTrackUL.tsx";

export default function ArtistPage() {

    const [open, setOpen] = useState(false);

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const threshold = 300;

            const newOpacity = Math.max(1 - scrollY / threshold, 0.8);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`main-artist ${open ? "" : "hidden"}`}>
            <div
                className="top-container"
                style={{ opacity: opacity }}
            >

                <Avatar
                    alt="#"
                    src="#"
                    sx={{
                        width: "225px",
                        height: "225px",
                        margin: "20px 0 0 50px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                />

                <h2 className="artist-page-name">{/*artist*/}Name</h2>

            </div>
            <div className="bottom-container">

                <div className="artist-btns">
                    <button className="play-btn"><PlayArrowIcon/></button>
                    <button className="follow-btn">Follow</button>
                    <button className="more-btn"><MoreHorizIcon/></button>
                </div>

                <div className="artist-title">
                    <h3>Popular</h3>
                </div>

                <div className="artist-tracks">
                    <ArtistTrackUL />
                    <button className="see-more-btn">See more</button>
                </div>

                <div className="artist-albums">
                    <ArtistAlbumList />
                </div>

            </div>
        </div>
    )
}