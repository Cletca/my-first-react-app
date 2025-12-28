import './artistAvatarUL.css';
// Data
import { artists } from "../data/artists.ts";

// Components
import ArtistAvatar from "./artistAvatar.tsx";

// Context
import {ArtistContext} from "../artistProvider.tsx";
import {NavigationContext} from "../navigationContext.tsx";

// Hooks
import { useContext } from "react";

interface ArtistItem {
    id: number;
    name: string;
    subs: string;
    image: string;
}

export default function ArtistAvatarUL() {

    const artistContext = useContext(ArtistContext);
    const navContext = useContext(NavigationContext);

    if (!artistContext || !navContext) return null;

    const { setArtistData } = artistContext;
    const { setCurrentPage } = navContext;

    function cardHandleClick(artist: ArtistItem) {
        setArtistData({
            name: artist.name,
            subs: artist.subs,
            img: artist.image,
        })
        setCurrentPage("artist");
        console.log("clicked");
    }

    return (
        <div className="avatars-container">

            <ul className="artists-list">
                {artists.map((artist) => (
                    <li key={artist.id} className="card-button">
                        <ArtistAvatar
                            name={artist.name}
                            subs={artist.subs}
                            image={artist.image}
                            onClick={() => {cardHandleClick(artist)}}
                        />
                    </li>
                ))}
            </ul>

        </div>
    );
}