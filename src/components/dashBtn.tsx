{/* CSS */}
import './dashBtn.css';

{/* MUI */}
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

{/* React */}
import { useState, useRef, useEffect } from "react";

export default function DashBtn() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="profile-btn-container" ref={menuRef}>
            <Button className="profile-btn" onClick={handleToggle}>
                <AccountCircleIcon />
            </Button>

            {open && (
                <div className="profile-menu">
                    <button onClick={() => setOpen(false)}>Profile</button>
                    <button onClick={() => setOpen(false)}>My account</button>
                    <button onClick={() => setOpen(false)}>Logout</button>
                </div>
            )}
        </div>
    );
}