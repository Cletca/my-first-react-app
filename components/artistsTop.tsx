import './artistsTop.css';

import ArtistAvatarUL from "./artistAvatarUL";

import { useState } from "react";

export default function ArtistsTop() {

    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const cardWidth = 215;
    const visibleCards = 6;
    const totalCards = 15;

    const prevSlide = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setIndex((prev) => Math.min(prev + 2, totalCards - visibleCards));
    };

    return (
        <div className="top-artist">

            <div className="popular-artists">
                <h3>Popular Artists</h3>
            </div>

            <div className="artist-top"
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
            >

                <div className="prev-btn-container">
                    <button
                        className={`prev-btn ${hover ? "visible" : ""}`}
                        onClick={prevSlide}
                        disabled={index === 0}
                    >
                        ❮
                    </button>
                </div>

                <div className="avatar-list">
                    <div
                        className="artist-window"
                         style={{
                             transform: `translateX(-${index * cardWidth}px)`,
                             transition: "transform 0.3s ease-in-out",
                             display: "flex",
                         }}
                    >
                        <ArtistAvatarUL />
                    </div>
                </div>

                <div className="next-btn-container">
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
    )
}