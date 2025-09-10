import './navBar.css';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavBar() {
    return (
        <nav>
            <div className="navbar-btns">
                <ul className="navbar-btn-list">
                    <li className="menu-btn">
                        <Button variant="text" color="primary">
                            <img src="Img/Logo.png" alt="Logo" style={{ width: '35px' }} />
                        </Button>
                    </li>
                    <li className="home-btn">
                        <Button variant="text" color="success">Home</Button>
                    </li>
                    <li className="playlists-btn">
                        <Button variant="text" color="success">Playlist</Button>
                    </li>
                    <li className="artistt-btn">
                        <Button variant="text" color="success">Artist</Button>
                    </li>
                </ul>
            </div>

            <div className="navbar-search">
                <ul className="search">
                    <li className="search-loupe">
                        <img src="Img/Green-Loupe.png" alt="Loupe" style={{ width: '25px' }} />
                    </li>
                    <li className="search-input">
                        <input className="search-input" type="text" placeholder="Search..." />
                    </li>
                </ul>
            </div>

            <div className="navbar-profile">
                <Button variant="text">
                    <AccountCircleIcon className="text-success" />
                </Button>
            </div>
        </nav>
    );
}