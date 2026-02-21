import { createContext, useContext, useState, ReactNode } from "react";

interface Track {
    id: number;
    image: string;
    name: string;
    views: number;
    time: number;
    src: string;
}

interface Album {
    img: string;
    name: string;
    views: number;
}

interface PlaylistType {
    albumData: Album | null;
    setAlbumData: (album: Album) => void;
    playlist: Track[];
    setPlaylist: (playlist: Track[]) => void;
}

const PlaylistContext = createContext<PlaylistType | null>(null);

export function PlaylistProvider({ children }: { children: ReactNode }) {

    const [albumData, setAlbumData] = useState<Album | null>(null);
    const [playlist, setPlaylist] = useState<Track[]>([]);

    return (
        <PlaylistContext.Provider
        value={{
            albumData,
            setAlbumData,
            playlist,
            setPlaylist
        }}
        >
            {children}
        </PlaylistContext.Provider>
    );
}

export function usePlaylist() {
    const context = useContext(PlaylistContext);

    if (!context) {
        throw new Error('usePlaylist must be used within a PlaylistProvider');
    }

    return context;
}