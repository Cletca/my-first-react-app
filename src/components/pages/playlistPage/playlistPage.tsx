import './css/playlistPage.css';

// MUI
import { Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; // Play
import PauseIcon from "@mui/icons-material/Pause"; // Pause
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Empty Fav
import FavoriteIcon from '@mui/icons-material/Favorite'; // Fav
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn"; // RandomOn
import ShuffleIcon from "@mui/icons-material/Shuffle"; // RandomOff
import RepeatOnIcon from '@mui/icons-material/RepeatOn'; // LoopOn
import RepeatIcon from '@mui/icons-material/Repeat'; // LoopOff

//Hooks
import { useState } from 'react';

// Player
import { usePlayer } from "../../../playerContext.tsx";

export default function PlaylistPage() {
    const {isPlaying, setIsPlaying, setCurrentTrack, setCurrentPlaylist} = usePlayer();

    const playlist = []

    const [favorite, setFavorite] = useState(false);
    const [random, setRandom] = useState(false);
    const [loop, setLoop] = useState(false);

    function playHandleClick() {
        setIsPlaying((prev) => !prev);
        setCurrentPlaylist(playlist)
        setCurrentTrack(playlist[0])
    }

    return (
        <div className="PlaylistPage">

            <div className="top-container">

            </div>

            <div className="main-container">

                <div className="top-content">
                    <Avatar
                        variant="rounded"
                        alt="#"
                        src="#"
                        sx={{
                            width: "225px",
                            height: "225px",
                            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                    />

                    <h2 className="playlist-page-name">Album name</h2>
                    <p className="playlist-page-subs">Views</p>
                </div>

                <div className="bottom-container">

                    <div className="playlist-btns">

                        <button
                            onClick={playHandleClick}
                            className="play-btn">
                            {isPlaying ? <PlayArrowIcon/> : <PauseIcon/>}
                        </button>

                        <button
                            className="play-random-btn"
                            onClick={() => setFavorite((prev) => !prev)}
                        >
                            {favorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </button>

                        <button
                            className="play-random-btn"
                            onClick={() => setRandom((prev) => !prev)}
                        >
                            {random ? <ShuffleOnIcon/> : <ShuffleIcon/>}
                        </button>

                        <button
                            className="play-random-btn"
                            onClick={() => setLoop((prev) => !prev)}>
                            {loop ? <RepeatOnIcon/> : <RepeatIcon/>}
                        </button>

                    </div>

                    <div className="music-container">
                        <div className="music-list">

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}