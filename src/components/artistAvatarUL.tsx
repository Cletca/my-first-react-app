import { artists } from "../data/artists.ts";
import './artistAvatarUL.css';
import ArtistAvatar from "./artistAvatar.tsx";

export default function ArtistAvatarUL() {
    return (
        <div className="avatars-container">

            <ul className="artists-list">
                {artists.map((artist) => (
                    <li key={artist.id} className="card-button">
                        <ArtistAvatar
                            name={artist.name}
                            subs={artist.subs}
                            image={artist.image}
                        />
                    </li>
                ))}
            </ul>

        </div>
    );
}