import './artistAvatar.css';
import { Avatar } from "@mui/material";

export interface ArtistProps {
    image: string;
    name: string;
    subs: string;
}

export default function ArtistAvatar({ image, name, subs }: ArtistProps) {
    return (
            <div className="artist-container">
                    <div className="artist-card-image">
                        <Avatar
                            src={image}
                            alt={name}
                            sx={{ width: 150, height: 150, objectFit: "cover" }}
                        />
                    </div>

                    <div className="artist-card-content">
                        <h3 className="artist-name">{name}</h3>
                        <p className="artist-subs">{subs}</p>
                    </div>
            </div>
    );
}