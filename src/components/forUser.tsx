import './forUser.css';

import MusicCardUL from "./5MusxiCardsUl.tsx";

import { useState } from "react";

export default function ForUser() {

    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const cardWidth = 250;
    const visibleCards = 5;
    const totalCards = 10;

    const prevSlide = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setIndex((prev) => Math.min(prev + 2, totalCards - visibleCards));
    };

    return (
        <div className="for-user-container">

            <div className="for-you">
                <h3>For You</h3>
            </div>

            <div
                className="for-user-slider"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >

                <div className="for-user-btn">
                    <button
                        className={`prev-btn ${hover ? "visible" : ""}`}
                        onClick={prevSlide}
                        disabled={index === 0}
                    >
                        ❮
                    </button>
                </div>

                <div className="for-user-window">
                    <div
                        className="for-user-slide"
                        style={{
                            transform: `translateX(-${index * cardWidth}px)`,
                            transition: "transform 0.3s ease-in-out",
                            display: "flex",
                        }}
                    >
                        <MusicCardUL />
                    </div>
                </div>

                <div className="for-user-btn">
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