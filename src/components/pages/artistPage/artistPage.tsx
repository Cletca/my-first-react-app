import './css/artistPage.css';

// MUI Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; {/* Play */}
import PauseIcon from '@mui/icons-material/Pause'; {/* Pause */}
import ShuffleIcon from '@mui/icons-material/Shuffle'; {/* RandomOff */}
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn'; {/* RandomOn */}

// MUI Components
import { Avatar } from "@mui/material";

// Components
import ArtistAlbumList from "../../UL-Components/artistAlbumUL.tsx";
import ArtistTrackUL from "../../UL-Components/ArtistTrackUL.tsx";
import MoreInfoBtn from "../../UI-Components/moreInfoBtn.tsx";

// Context
import {useArtistData} from "../../../artistProvider.tsx";
import {usePlayer} from "../../../playerContext.tsx";

// Hooks
import { useState } from "react";

export default function ArtistPage() {

    const { artistData, artistSongs } = useArtistData();
    const { isPlaying, setIsPlaying, setCurrentTrack, setCurrentPlaylist } = usePlayer();

    const [follow, setFollow] = useState(false);
    const [random, setRandom] = useState(false);

    console.log("Current artist page is:", artistData?.name);

    if (!artistData) {
        return <div className="loading">Select an artist...</div>;
    }

    function playHandleClick() {
        setIsPlaying((prev) => !prev);
        setCurrentPlaylist(artistSongs);
        setCurrentTrack(artistSongs[0]);
    }

    return (
        <div className="ArtistPage">

            <div className="top-container">

            </div>

            <div className="main-container">

                <div className="top-content">
                    <Avatar
                        alt="#"
                        src={artistData.img}
                        sx={{
                            width: "225px",
                            height: "225px",
                            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                    />

                    <h2 className="artist-page-name">{artistData.name}</h2>
                    <span className="artist-page-subs">Followers: {artistData.subs}</span>
                </div>

                <div className="bottom-container">

                    <div className="artist-btns">

                        <button
                            onClick={playHandleClick}
                            className="play-btn">
                            {isPlaying ? <PlayArrowIcon/> : <PauseIcon/>}
                        </button>

                        <button
                            onClick={() => setFollow((prev) => !prev)}
                            className="follow-btn">
                            {follow ? "Following" : "Follow"}
                        </button>

                        <button
                            onClick={() => setRandom((prev) => !prev)}
                            className="play-random-btn">
                            {random ? <ShuffleOnIcon/> : <ShuffleIcon/>}
                        </button>

                        <MoreInfoBtn />

                    </div>

                    <div className="artist-title">
                        <h3>Popular</h3>
                    </div>

                    <div className="artist-tracks">
                        <ArtistTrackUL />
                    </div>

                    <div className="artist-albums">
                        <ArtistAlbumList />
                    </div>

                </div>

            </div>

        </div>
    )
}