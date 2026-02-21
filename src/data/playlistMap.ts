import { AshesOfTomorrowSongs } from "./AlbumTracks/AshesOfTomorrow.ts";
import { AuroraSkiesSongs } from "./AlbumTracks/AuroraSkies.ts";
import { BlueVelvetDreamsSongs } from "./AlbumTracks/BlueVelvetDreams.ts";
import { CrystalUniverseSongs } from "./AlbumTracks/CrystalUniverse.ts";
import { DigitalRiotSongs } from "./AlbumTracks/DigitalRiot.ts";
import { EchoesOfInfinitySongs } from "./AlbumTracks/EchoesOfInfinity.ts";
import { GravityCrashSongs } from "./AlbumTracks/GravityCrash.ts";
import { NewAgeTitansSongs } from "./AlbumTracks/NewAgeTitans.ts";
import { PulseOfTheStreetsSongs } from "./AlbumTracks/PulseOfTheStreets.ts";
import { VoicesInTheDarkSongs } from "./AlbumTracks/VoicesInTheDark.ts";

interface Track {
    id: number;
    name: string;
    image: string;
    views: number;
    time: number;
    src: string;
}

export const albumTracksMap: Record<string, Track[]> = {
    "Crystal Universe": CrystalUniverseSongs,
    "Ashes of Tomorrow": AshesOfTomorrowSongs,
    "Blue Velvet Dreams": BlueVelvetDreamsSongs,
    "Digital Riot": DigitalRiotSongs,
    "Aurora Skies": AuroraSkiesSongs,
    "Voices in the Dark": VoicesInTheDarkSongs,
    "Pulse of the Streets": PulseOfTheStreetsSongs,
    "New Age Titans": NewAgeTitansSongs,
    "Gravity Crash": GravityCrashSongs,
    "Echoes of Infinity": EchoesOfInfinitySongs,
}