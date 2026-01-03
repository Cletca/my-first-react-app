import './artistPage.css';

// MUI Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// MUI Components
import { Avatar } from "@mui/material";

// Hooks
import { useContext } from "react";

// Components
import ArtistAlbumList from "./artistAlbumUL.tsx";
import ArtistTrackUL from "./ArtistTrackUL.tsx";

// Context
import {ArtistContext} from "../artistProvider.tsx";

export default function ArtistPage() {

    const artistContext = useContext(ArtistContext);

    const { artistData } = artistContext;

    console.log(artistData);

    return (
        <div className="ArtistPage">
            <div
                className="top-container"
            >

                <Avatar
                    alt="#"
                    src={artistData.img}
                    sx={{
                        width: "225px",
                        height: "225px",
                        margin: "0 0 0 50px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                />

                <h2 className="artist-page-name">{artistData.name}</h2>
                <span className="artist-page-subs">Followers: {artistData.subs}</span>

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