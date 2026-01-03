import { createContext, useContext, useState } from "react";

interface Track {
    id: number;
    name: string;
    image: string;
    artist?: string;
    src?: string;
}

interface PlayerContextType {
    currentTrack: Track | null;
    setCurrentTrack: (currentTrack: Track | null) => void;
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: React.PropsWithChildren) {

    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                setCurrentTrack,
                isPlaying,
                setIsPlaying,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }

    return context;
}