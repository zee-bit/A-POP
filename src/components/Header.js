import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Link,
  IconButton
} from "@material-ui/core";
import { HeadsetTwoTone } from "@material-ui/icons";
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {GlobalThemeContext} from "./ThemeProvider";
// Got access to theme as well
const useStyles = makeStyles((theme) => ({
  heading: {
    marginLeft: theme.spacing(2),
  },
  themeIcon: {
    position: 'absolute',
    right: 30,
  }
}));

function Header() {
  //Styles can be used as hooks.
  const classes = useStyles();
  //const [Theme, setTheme] = React.useState('dark')
  const {GlobalTheme, setGlobalTheme} = useContext(GlobalThemeContext)

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <HeadsetTwoTone />
        <Typography className={classes.heading} variant="h6" component="h1">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abhisheknaiidu/A-POP"
            style={{ paddingLeft: 10, textDecoration: "none" }}
            color="inherit"
          >
            A-POP
          </Link>
        </Typography>
        <div className={classes.themeIcon}>
          {/* {Theme === 'dark' ? 
          <Brightness7Icon type="button" onClick={() => setTheme('light')} /> :
          <Brightness3Icon type="button" onClick={() => setTheme('dark')} />} */}
          <IconButton>
            {GlobalTheme === 'dark' ? 
            <Brightness7Icon onClick={() => setGlobalTheme('light')} /> :
            <Brightness3Icon onClick={() => setGlobalTheme('dark')} />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
