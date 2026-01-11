import {BillieEilishSongs} from "./artistsTracks/billieEilishSongs.ts";
import {WeekndSongs} from "./artistsTracks/weekndSongs.ts";
import {DrakeSongs} from "./artistsTracks/drakeSongs.ts";
import {ArianaGrandeSongs} from "./artistsTracks/arianaGrandeSongs.ts";
import {TaylorSwiftSongs} from "./artistsTracks/taylorSwiftSongs.ts";
import {PostMaloneSongs} from "./artistsTracks/postMaloneSongs.ts";
import {DuaLipaSongs} from "./artistsTracks/duaLipaSongs.ts";
import {EdSheeranSongs} from "./artistsTracks/edSheeranSongs.ts";
import {ShawnMendesSongs} from "./artistsTracks/shawnMendesSongs.ts";
import {RihannaSongs} from "./artistsTracks/rihannaSongs.ts";
import {SelenaGomezSongs} from "./artistsTracks/selenaGomezSongs.ts";
import {KanyeWestSongs} from "./artistsTracks/kanyeWestSongs.ts";
import {OliviaRodrigoSongs} from "./artistsTracks/oliviaRodrigoSongs.ts";
import {ImagineDragonsSongs} from "./artistsTracks/imagineDragonsSongs.ts";
import {BlackPinkSongs} from "./artistsTracks/blackPinkSongs.ts";

interface Track {
    id: number;
    name: string;
    image: string;
    views: number;
    time: number;
    src: string;
}

export const artistsSongsMap: Record<string, Track[]> = {
    "Billie Eilish": BillieEilishSongs,
    "The Weeknd": WeekndSongs,
    "Drake": DrakeSongs,
    "Ariana Grande": ArianaGrandeSongs,
    "Taylor Swift": TaylorSwiftSongs,
    "Post Malone": PostMaloneSongs,
    "Dua Lipa": DuaLipaSongs,
    "Ed Sheeran": EdSheeranSongs,
    "Shawn Mendes": ShawnMendesSongs,
    "Rihanna": RihannaSongs,
    "Selena Gomez": SelenaGomezSongs,
    "Kanye West": KanyeWestSongs,
    "Olivia Rodrigo": OliviaRodrigoSongs,
    "Imagine Dragons": ImagineDragonsSongs,
    "BLACKPINK": BlackPinkSongs,
}