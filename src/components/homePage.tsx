import ForUser from "./forUser.tsx";
import ArtistsTop from "./artistsTop.tsx";
import MusicPlayer from "./musicPlayer.tsx";
import AlbumList from "./albumUL.tsx";

export default function HomePage() {
    return (
        <div className="HomePage">
            <ForUser />
            <ArtistsTop />
            <MusicPlayer />
            <AlbumList />
        </div>
    )
}