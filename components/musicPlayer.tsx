import './musicPlayer.css'; {/*  */}

import { Button } from "@mui/material";
import { Slider } from "@mui/material";

import PlayArrowIcon from '@mui/icons-material/PlayArrow'; {/* Play */}
import PauseIcon from '@mui/icons-material/Pause'; {/* Stop */}
import ReplayIcon from '@mui/icons-material/Replay'; {/* Replay */}
import CloseIcon from '@mui/icons-material/Close'; {/* Close */}

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'; {/* Prev */}
import SkipNextIcon from '@mui/icons-material/SkipNext'; {/* Next */}

import VolumeUpIcon from '@mui/icons-material/VolumeUp'; {/* VolumeTop */}
import VolumeDownIcon from '@mui/icons-material/VolumeDown'; {/* VolumeMed */}
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'; {/* VolumeMin */}
import VolumeOffIcon from '@mui/icons-material/VolumeOff'; {/* VolumeOff */}

import RepeatIcon from '@mui/icons-material/Repeat'; {/* Loop */}
import RepeatOneIcon from '@mui/icons-material/RepeatOne'; {/* Active loop */}

import { useState, useEffect, useRef } from "react";
import {usePlayer} from "../src/playerContext.tsx";

import { MusicList } from '../src/data/Music.ts';

export default function MusicPlayer() {

    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [pause, setPause] = useState(false);
    const [loop, setLoop] = useState(false);
    const [volume, setVolume] = useState(30);
    const [prevVolume, setPrevVolume] = useState(30);
    const [timer, setTimer] = useState(0);
    const [displayTime, setDisplayTime] = useState("0:00");
    const audioRef = useRef<HTMLAudioElement>(null);
    const playerContext = usePlayer();

    function volumeShow() {
        setHidden((prev) => !prev);
    }

    function volumeHandleClick() {
        if (volume !== 0) {
            setPrevVolume(volume);
            setVolume(0);
        } else {
            setVolume(prevVolume);
        }
    }

     const volumeHandleChange = (event, newValue) => {
         setVolume(newValue);
     }

     function pauseHandleClick() {
         if (timer === 100) {
             setTimer(0);
             setPause(false);
         } else {
             setPause((prev) => !prev);
         }
     }

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;

            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        const updateProgress = () => {
            if (audio.duration && !Number.isNaN(audio.duration)) {
                const progress = (audio.currentTime / audio.duration) * 100;
                setTimer(progress);

                const current = Math.floor(audio.currentTime);
                const minutes = Math.floor(current / 60);
                const seconds = current % 60;

                setDisplayTime(`${minutes}:${seconds.toString().padStart(2, '0')}/${formatTime(Math.floor(audio.duration))}`);
            }
        };

        const onLoaded = () => {
            updateProgress();
        };

        const onEnded = () => {
            setPause(true);
            setTimer(100);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', onLoaded);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', onLoaded);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    {/* AudioRef ID */}
    useEffect(() => {
        if (!playerContext || playerContext.currentId === null) return;

        const track = MusicList.find((m) => m.id === playerContext.currentId);

        if (track && audioRef.current) {
            audioRef.current.src = track.src.replace(/^public\//, "");

            audioRef.current.play()
                .then(() => {
                    setPause(false);
                    setIsOpen(true);
                })
                .catch(() => {});
        }
    }, [playerContext?.currentId]);

    {/* Close Player */}
    function closePlayer() {
        setIsOpen(false);
        setPause(true);
        playerContext?.setCurrentId(null);
    }

    {/* Play/Pause */}
    useEffect(() => {
        if(!audioRef.current) return;

        if(pause) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [pause]);

    {/* Next */}
    const playNext = () => {
        if (!playerContext) return;

        const currentIndex = MusicList.findIndex(
            (m) => m.id === playerContext.currentId
        );

        const nextIndex =
            currentIndex === -1
                ? 0
                : (currentIndex + 1) % MusicList.length;

        const nextTrack = MusicList[nextIndex];

        playerContext.setCurrentTrack(
            nextTrack.id,
            nextTrack.name,
            nextTrack.image
        );
    };

    {/* Prev */}
    const playPrev = () => {
        if (!playerContext) return;

        const currentIndex = MusicList.findIndex(
            (m) => m.id === playerContext.currentId
        );

        const prevIndex =
            currentIndex === -1
                ? 0
                : (currentIndex - 1 + MusicList.length) % MusicList.length;

        const prevTrack = MusicList[prevIndex];

        playerContext.setCurrentTrack(
            prevTrack.id,
            prevTrack.name,
            prevTrack.image
        );
    };

    {/* Loop */}
    function playLoop() {
        setLoop((prev) => !prev);
    }

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.loop = loop;
    }, [loop]);

    {/* Volume */}
    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

     const timerHandleChange = (event, newValue) => {
         setTimer(newValue);

         if (audioRef.current) {
             const audio = audioRef.current;
             const seekTime = (newValue / 100) * audio.duration;
             audio.currentTime = seekTime;
         }
     }
    {/* Display timer  const displayTimer = 1 */}

    return (
        <div className={`mini-player ${isOpen ? "open" : ""}`}>

            <audio
                ref={audioRef}
                src="#"
                onEnded={() => setPause(true)}
            >

            </audio>



            <div className="name-img">

                <div className="song-img-container">
                    <img
                        className="song-img"
                        src={playerContext?.currentImage ?? "#"}
                        alt={playerContext?.currentName ?? "#"}
                    />
                </div>

                <div className="song-name-container">
                    <span className="song-name">
                        {playerContext?.currentName ?? "Song name"}
                    </span>
                </div>

            </div>

            <div className="timer-container">
                <span className="timer">{displayTime}</span>
                <Slider
                    value={timer}
                    onChange={timerHandleChange}
                    min={0}
                    max={100}
                    sx={{
                        width: '90%',
                        color: 'white',
                        '& .MuiSlider-thumb': {
                            width: '16px',
                            height: '16px',
                        }
                }}
                />
            </div>

            <div className="player-container">

                <div className="btns">
                    <ul>

                        <li>
                            <Button
                                onMouseEnter={volumeShow}
                                onMouseLeave={volumeShow}
                                onClick={volumeHandleClick}
                                sx={{
                                    color: 'white',
                                }}>
                                {volume === 0 ? (
                                    <VolumeOffIcon />
                                ) : volume > 50 ? (
                                    <VolumeUpIcon />
                                ) : volume > 25 ? (
                                    <VolumeDownIcon />
                                ) : (
                                    <VolumeMuteIcon />
                                )}
                            </Button>
                        </li>

                        <li>
                            <Button
                                sx={{
                                    color: 'white',
                                }}
                                    onClick={playPrev}
                            >
                                <SkipPreviousIcon />
                            </Button>
                        </li>

                        <li>
                            <Button
                                onClick={pauseHandleClick}
                                sx={{
                                    color: 'white',
                                }}>
                                {timer === 100 ? (
                                    <ReplayIcon />
                                ) : pause ? (
                                    <PlayArrowIcon />
                                ) : (
                                    <PauseIcon />
                                )}
                            </Button>
                        </li>

                        <li>
                            <Button
                                sx={{
                                    color: 'white',
                                }}
                                    onClick={playNext}
                            >
                                <SkipNextIcon />
                            </Button>
                        </li>

                        <li>
                            <Button
                                sx={{
                                    color: 'white',
                                }}
                                onClick={playLoop}
                            >
                                {loop ? <RepeatOneIcon /> : <RepeatIcon />}
                            </Button>
                        </li>

                    </ul>
                </div>

                <div
                    className="volume-container"
                    onMouseEnter={volumeShow}
                    onMouseLeave={volumeShow}
                >
                    <Slider
                        value={volume}
                        onChange={volumeHandleChange}
                        sx={{
                            width: '100px',
                            marginLeft: '25px',
                            color: 'white',
                            '& .MuiSlider-thumb': {
                                width: '12px',
                                height: '12px',
                        }
                    }}
                    />
                    <div className={`hide-volume ${hidden ? "visible" : ""}`}></div>
                </div>

                <Button
                    sx={{
                        width: '25px',
                        height: '25px',
                        position: 'absolute',
                        top: 17,
                        padding: '0',
                        borderRadius: '50%',
                        color: 'white',
                    }}
                    className="close-btn"
                    onClick={closePlayer}
                >
                    <CloseIcon/>
                </Button>

            </div>
        </div>
    );
}