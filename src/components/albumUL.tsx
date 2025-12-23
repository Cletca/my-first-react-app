import './albumUl.css';

import { Playlists } from "../data/Playlists.ts";
import AlbumCard from "./albumCard.tsx";
import {useState} from "react";

export default function AlbumList() {

    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const cardWidth = 215;
    const visibleCards = 6;
    const totalCards = Playlists.length;

    const prevSlide = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setIndex((prev) => Math.min(prev + 2, totalCards - visibleCards));
    };


    return (
        <div
            className="albumList"
        >
            <div className="album-title-container">
                <h3 className="album-title">
                    Best Albums
                </h3>
            </div>
            <div
                className="album-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >

                <div className="album-btn">
                    <button
                        className={`prev-btn ${hover ? "visible" : ""}`}
                        onClick={prevSlide}
                        disabled={index === 0}
                    >
                        ❮
                    </button>
                </div>

                <ul
                    className="album-ul"
                    style={{
                        transform: `translateX(-${index * cardWidth}px)`,
                        transition: "transform 0.3s ease-in-out",
                        display: "flex",
                    }}
                >
                    {Playlists.map((album) => (
                        <li key={album.id}>
                            <AlbumCard
                                image={album.img}
                                name={album.name}
                                artists={album.artist}
                                genre={album.genre}
                            />
                        </li>
                    ))}
                </ul>

                <div className="album-btn">
                    <button
                        className={`next-btn ${hover ? "visible" : ""}`}
                        onClick={nextSlide}
                        disabled={index >= totalCards - visibleCards}
                    >
                        ❯
                    </button>
                </div>

            </div>
        </div>
    );
}