import { createContext, useContext, useState } from "react";

interface PlayerContextType {
    currentId: number | null;
    setCurrentId: (id: number | null) => void;
    currentName: string | null;
    currentImage: string | null;
    setCurrentTrack: (id: number, name: string, image: string) => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: React.PropsWithChildren) {
    const [currentId, setCurrentId] = useState<number | null>(null);
    const [currentName, setCurrentName] = useState<string | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const setCurrentTrack = (id: number, name: string, image: string) => {
        setCurrentId(id);
        setCurrentName(name);
        setCurrentImage(image);
    };

    return (
        <PlayerContext.Provider
            value={{
                currentId,
                setCurrentId,
                currentName,
                currentImage,
                setCurrentTrack,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    return useContext(PlayerContext);
}