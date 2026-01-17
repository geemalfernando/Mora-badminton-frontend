import React, { useState } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElmobile, setAnchorElmobile] = useState(null);
  const open = Boolean(anchorEl);
  const openRegister = Boolean(anchor);
  const openRegisterMobile = Boolean(anchorMobile);
  const openmobile = Boolean(anchorElmobile);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickRegister = (event) => {
    navigate("/register/player");
  };
  const handleClickRegisterMobile = (event) => {
    navigate("/register/player");
  };
  const handleClickMobile = (event) => {
    setAnchorElmobile(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseRegister = () => {
    setAnchor(null);
  };
  const handleCloseRegisterMobile = () => {
    setAnchorMobile(null);
  };
  const handleCloseMobile = () => {
    setAnchorElmobile(null);
  };
  const color = indigo[900];
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  return (
    <div className={`${styles["nav-container"]}`}>
      <div className={`${styles["nav-bars"]}`}>
        <div className={`${styles["navBarList"]}`}>
          <Link to="/">
            <img
              src={require("../../assests/images/umisf_logo.png")}
              alt={"logo"}
            ></img>
          </Link>
          <ul>
            <Link to="/" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Home</li>
            </Link>
            <Link to="/about" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>About</li>
            </Link>
            <React.Fragment>
              <IconButton
                onClick={handleClickRegister}
                size="small"
                aria-controls={openRegister ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openRegister ? "true" : undefined}
                className={`${styles["navBarItemLink"]}`}
              >
                <li className={`${styles["register"]}`}>Register</li>
              </IconButton>

              <Menu
                anchorEl={anchor}
                id="account-menu"
                open={openRegister}
                onClose={handleCloseRegister}
                onClick={handleCloseRegister}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
	              >
	                <MenuItem onClick={handleCloseRegister}>
	                  <Link
	                    to="/register/single-double"
	                    className={`${styles["drop-down-item"]}`}
	                  >
	                    Register (Online)
	                  </Link>
	                </MenuItem>
	                <MenuItem onClick={handleCloseRegister}>
	                  <Link
	                    to="/register/player"
	                    className={`${styles["drop-down-item"]}`}
	                  >
	                    Player Registration
	                  </Link>
	                </MenuItem>
	                <MenuItem onClick={handleCloseRegister}>
	                  <Link
	                    to="/register/university"
	                    className={`${styles["drop-down-item"]}`}
	                  >
	                    University Registration
	                  </Link>
	                </MenuItem>
	                <MenuItem onClick={handleCloseRegister}>
	                  <Link
	                    to="/register/company"
	                    className={`${styles["drop-down-item"]}`}
	                  >
	                    Company Registration
	                  </Link>
	                </MenuItem>

	                <MenuItem onClick={handleCloseRegister}>
	                  <a
	                    href="https://forms.gle/dyu5Q2Xu2qoN7Sp2A"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/A92WTArTDLRDCfMx6"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Club Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/hLPTC36tyyfbYbV38"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Novices
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/DvWKu3qBR3KinxTY9"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/J4rGkstWSdTWcvx89"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/EvV4RAH9d9giqsCV6"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>

            <React.Fragment>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className={`${styles["navBarItemLink"]}`}
              >
                <li className={`${styles["register"]}`}>Entry Forms</li>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

                <MenuItem onClick={handleClose}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Club Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Novices
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>
            <Link to="/draws" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
            </Link>
            <Link to="/Timeline" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Events</li>
            </Link>
            {/* <a href="/developers" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Developers</li>
            </a> */}
            <Link to="/contact-us" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Contact Us</li>
            </Link>
            {/* <a href="/login" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Login</li>
            </a> */}
          </ul>
        </div>
      </div>

      {/* minimized side nav bar */}
      <div className={`${styles["mini-nav"]}`} onClick={loadSideBar}>
        <i
          id="toggle-btn"
          className={`${styles["toggle-button"]} bx bx-menu`}
        ></i>
        <span className={`${styles["toggle-text"]}`}> Menu</span>
      </div>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <Link to="/" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </Link>
          <Link to="/about" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </Link>
          <React.Fragment>
            <IconButton
              onClick={handleClickRegisterMobile}
              size="small"
              aria-controls={openRegisterMobile ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openRegisterMobile ? "true" : undefined}
              className={`${styles["register-dropdown"]}`}
            >
              <li className={`${styles["register"]}`}>Register</li>
            </IconButton>

            <Menu
              anchorEl={anchorMobile}
              id="account-menu"
              open={openRegisterMobile}
              onClose={handleCloseRegisterMobile}
              onClick={handleCloseRegisterMobile}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
	            >
	              <MenuItem onClick={handleCloseRegisterMobile}>
	                <Link
	                  to="/register/single-double"
	                  className={`${styles["drop-down-item-mobile"]}`}
	                >
	                  Register (Online)
	                </Link>
	              </MenuItem>
	              <MenuItem onClick={handleCloseRegisterMobile}>
	                <Link
	                  to="/register/player"
	                  className={`${styles["drop-down-item-mobile"]}`}
	                >
	                  Player Registration
	                </Link>
	              </MenuItem>
	              <MenuItem onClick={handleCloseRegisterMobile}>
	                <Link
	                  to="/register/university"
	                  className={`${styles["drop-down-item-mobile"]}`}
	                >
	                  University Registration
	                </Link>
	              </MenuItem>
	              <MenuItem onClick={handleCloseRegisterMobile}>
	                <Link
	                  to="/register/company"
	                  className={`${styles["drop-down-item-mobile"]}`}
	                >
	                  Company Registration
	                </Link>
	              </MenuItem>

	              <MenuItem onClick={handleCloseRegisterMobile}>
	                <a
	                  href="https://forms.gle/dyu5Q2Xu2qoN7Sp2A"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Age Group
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/DBs4DZpsiTMo15Rx5"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Club Team
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegister}>
                <a
                  href="https://forms.gle/uow7gYHYYmZKKHSFA"
                  target="_blank"
                  className={`${styles["drop-down-item"]}`}
                >
                  Novices
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/GtTvTXMPdRSwjaMq5"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Individual
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/BY5ffJSwPKJpLj8h9"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Staff
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/ENEgTDgRyBUse3vs6"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Team
                </a>
              </MenuItem>
{/*               <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1rib_sQQbHAtGlFZDYSSX5xznibua_u7l/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Invitational School
                  </a>
                </MenuItem> */}
            </Menu>
          </React.Fragment>
          <Link to="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
          </Link>

          <React.Fragment>
            <IconButton
              onClick={handleClickMobile}
              size="small"
              aria-controls={openmobile ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openmobile ? "true" : undefined}
              className={`${styles["register-dropdown"]}`}
              style={{ marginTop: "20px" }}
            >
              <li className={`${styles["register"]}`}>Entry Forms</li>
            </IconButton>

            <Menu
              anchorEl={anchorElmobile}
              id="account-menu"
              open={openmobile}
              onClose={handleCloseMobile}
              onClick={handleCloseMobile}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Age Group
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Club Team
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegister}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Novices
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Individual
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Staff
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="#"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Team
                </a>
              </MenuItem>
{/*               <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1rib_sQQbHAtGlFZDYSSX5xznibua_u7l/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Invitational School
                  </a>
                </MenuItem> */}
            </Menu>
          </React.Fragment>

          {/* <a href="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
          </a> */}
          <Link to="/Timeline" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Events</li>
          </Link>
          {/* <a href="/developers" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Developers</li>
          </a> */}
          <Link to="/contact-us" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
          </Link>
          {/* <a href="/login" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Login</li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
