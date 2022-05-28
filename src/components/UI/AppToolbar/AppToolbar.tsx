import {AppBar, Box, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {FAV_CATS_PATH, HOME_PATH} from "../../../constants/paths";
import {makeStyles} from "tss-react/mui";

const AppToolbar = () => {
  const {classes: c, cx} = useStyles();
  return (
    <Box sx={{flexGrow: 1}} component={"nav"}>
      <AppBar position="static">
        <Toolbar>
          <ul className={cx(c.nav)}>
            <li>
              <NavLink
                to={HOME_PATH}
                className={({isActive}) => isActive ? cx(c.link, c.activeLink) : cx(c.link)}
                end
              >
                Все котики
              </NavLink>
            </li>
            <li>
              <NavLink
                to={FAV_CATS_PATH}
                className={({isActive}) => isActive ? cx(c.link, c.activeLink) : cx(c.link)}
              >
                Любимые котики
              </NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const useStyles = makeStyles()(
  (theme) => ({
    nav: {
      margin: 0,
      padding: 0,
      display: "flex",
      listStyleType: "none",
    },
    link: {
      display: "block",
      padding: "20px",
      color: "white",
      borderRadius: 0,
      textDecoration: "none",
      "&:hover": {
        backgroundColor: theme.palette.primary.light
      }
    },
    activeLink: {
      backgroundColor: theme.palette.primary.dark
    }
  })
);

export default AppToolbar;