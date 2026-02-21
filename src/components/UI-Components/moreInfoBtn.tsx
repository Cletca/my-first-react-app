import "./css/moreInfoBtn.css";

// ICONS
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SensorsIcon from '@mui/icons-material/Sensors';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import IosShareIcon from '@mui/icons-material/IosShare';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MoreInfoBtn() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    scale: "1",
                    color: 'gray',
                    '&:hover': {
                        background: 'none',
                        scale: '1.05',
                        transition: 'scale 0.1s',
                    }
                }}
                disableRipple
            >
                <MoreHorizIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                disableScrollLock={true}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={handleClose}> <PersonAddIcon /> Follow </MenuItem>
                <MenuItem onClick={handleClose}> <DoNotDisturbIcon /> Don`t play this artist </MenuItem>
                <MenuItem onClick={handleClose}> <SensorsIcon /> Go to artist radio </MenuItem>
                <MenuItem onClick={handleClose}> <ReportGmailerrorredIcon /> Report </MenuItem>
                <MenuItem onClick={handleClose}> <IosShareIcon /> Share </MenuItem>
            </Menu>
        </div>
    );
}
