import ForUser from "./forUser.tsx";
import ArtistsTop from "./artistsTop.tsx";
import AlbumList from "../../UL-Components/albumUL.tsx";

export default function HomePage() {
    return (
        <div className="HomePage">
            <ForUser />
            <ArtistsTop />
            <AlbumList />
        </div>
    )
}