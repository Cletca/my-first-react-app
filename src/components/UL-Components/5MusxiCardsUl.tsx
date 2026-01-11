import MusicCard from "../liComponents/musicCard.tsx";
import {MusicList} from "../../data/Music.ts";

import {usePlayer} from "../../playerContext.tsx";

export default function MusicCardUL () {
    const {setCurrentTrack, setCurrentPlaylist} = usePlayer();

    return (

        <ul className="for-user-ul">
            {MusicList.map((music) => (
                <li key={music.id}>
                    <MusicCard
                        image={music.image}
                        name={music.name}
                        author={music.author}
                        views={music.views}
                        onClick={() => {
                            setCurrentPlaylist(MusicList);
                            setCurrentTrack({
                                id: music.id,
                                name: music.name,
                                image: music.image,
                                artist: music.author,
                                src: music.src,
                            });
                        }}
                    />
                </li>
            ))}
        </ul>

    )
}