import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("My Profile");
  };

  const handleOpenMenu = (event) => {setAnchorEl(event.currentTarget);};
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("handle Logout");
  };
  return (
    <nav
      className="PX-5 Z-50 PY-[.8rem] bg-[#e91e63] lg:px-20 flex 
    justify-between"
    >
      <div className="flex items-center space-x-4">
        <div
          className="lg:mr-10 cursor-pointer flex items-center
        space-x-4"
          onClick={() => navigate("/")}
        >
          <li className="logo font-semibold text-gray-300 text-2x1">
            Rasoi Ghar
          </li>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5" }} />
        </IconButton>
        {true ? (
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={true ? handleOpenMenu : navigateToProfile}
            className="font-semibold cursor-pointer"
          >
            My Profile
          </span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5" }} />
          </IconButton>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/admin")}>Canteen</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <IconButton onClick={()=>navigate("/About")}>
          <InfoIcon sx={{ fontSize: "1.5" }} />
        </IconButton>
      </div>
    </nav>
  );
};
export default Navbar;
