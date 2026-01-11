import './css/artistAvatar.css';
import { Avatar } from "@mui/material";

export interface ArtistProps {
    image: string;
    name: string;
    subs: string;
    onClick: () => void;
}

export default function ArtistAvatar({ image, name, subs, onClick }: ArtistProps) {

    return (
            <div
                className="artist-container"
                onClick={onClick}
            >
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