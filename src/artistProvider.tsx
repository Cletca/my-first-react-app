import { createContext, useState, ReactNode } from "react";

interface ArtistData {
    name: string;
    subs: string;
    img: string;
}

interface ArtistContextType {
    artistData: ArtistData | null;
    setArtistData: (data: ArtistData) => void;
}

export const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider = ({ children }: { children: ReactNode }) => {

    const [artistData, setArtistData] = useState<ArtistData | null>(null);

    return (
        <ArtistContext.Provider value={{ artistData, setArtistData }}>
            {children}
        </ArtistContext.Provider>
    )
}