import './Search.css';

import { useState } from "react";

export default function SearchBox({ tracks }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [focus, setFocus] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const filtered = tracks.filter((track) =>
            track.name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filtered);
    };

    const handleSelect = (name) => {
        setQuery(name);
        setSuggestions([]);
    };

    return (
        <div className="search-box">
            <ul className="search">
                <li className={`search-loupe ${focus ? "focus" : ""}`}>
                    <img src="Img/Green-Loupe.png" alt="Loupe" style={{ width: '25px' }} />
                </li>

                <li className={`search-input ${focus ? "focus" : ""}`}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleChange}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </li>
            </ul>

            {/* AutoFill */}
            {suggestions.length > 0 && (
                <ul className="search-suggestions">
                    {suggestions.map((track) => (
                        <li
                            key={track.id}
                            className="suggestion-item"
                            onClick={() => handleSelect(track.name)}
                        >
                            {track.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}