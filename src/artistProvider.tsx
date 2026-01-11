import {createContext, useContext, useState} from "react";

interface Track {
    id: number;
    image: string;
    name: string;
    views: number;
    time: number;
    src: string;
}

interface ArtistData {
    name: string;
    subs: string;
    img: string;
}

interface ArtistContextType {
    artistData: ArtistData | null;
    setArtistData: (data: ArtistData | null) => void;
    artistSongs: Track[];
    setArtistSongs: (songs: Track[]) => void;
}

export const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider = ({ children }: React.PropsWithChildren) => {

    const [artistData, setArtistData] = useState<ArtistData | null>(null);
    const [artistSongs, setArtistSongs] = useState<[]>([]);

    return (
        <ArtistContext.Provider
            value={{
                artistData,
                setArtistData,
                artistSongs,
                setArtistSongs
        }}>
            {children}
        </ArtistContext.Provider>
    )
}

export function useArtistData() {
    const context = useContext(ArtistContext);

    if (context === undefined) {
        throw new Error("useArtistData must be used within an ArtistProvider");
    }

    return context;
}