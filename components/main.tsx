import './main.css';

import { Button } from '@mui/material';

export default function Main() {

    return (
        <div className="main">

            <div className="main-left">
                <ul>

                    <li>
                        <Button>Home</Button>
                    </li>
                    <li>
                        <Button>Library</Button>
                    </li>

                    <li>
                        <Button>History</Button>
                    </li>
                    <li>
                        <Button>Playlists</Button>
                    </li>
                    <li>
                        <Button>Liked Songs</Button>
                    </li>
                    <li>
                        <Button>Downloads</Button>
                    </li>

                </ul>
            </div>

            <div className="main-center">

            </div>

            <div className="main-right">

            </div>
        </div>
    );
}