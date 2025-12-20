import MusicCard from "./musicCard";
import {MusicList} from "../src/data/Music.ts";

export default function MusicCardUL () {
    return (

        <ul className="for-user-ul">
            {MusicList.map((music) => (
                <li key={music.id}>
                    <MusicCard
                        id={music.id}
                        image={music.image}
                        name={music.name}
                        author={music.author}
                        views={music.views}
                    />
                </li>
            ))}
        </ul>

    )
}