import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import orangeLogo from "../assets/images/orangeLogo.png";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {deepOrange, blue} from '@material-ui/core/colors';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

interface ScrollProps {
  window?: () => Window;
  children?: React.ReactElement;
  isSm: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuItem: {
      marginRight: theme.spacing(3),
    },
    link: {
      color: deepOrange[50]
    },
    avatar: {
      backgroundColor: blue[500],
      backgroundradius: "10px"
    }
  }),
);

function ScrollTop(props: ScrollProps) {
  const { children, window, isSm } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: isSm ? 250 : 3000,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export const Navbar = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <React.Fragment>
      <AppBar>
        <Grid container>
          <Grid item xs={false} lg={1} xl={2} />
          <Grid item xs={12} lg={10} xl={8}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
                <Avatar variant="rounded" alt="Remy Sharp" src={orangeLogo} className={classes.avatar} />
              </IconButton>
              {/* <Typography variant="h6" className={classes.menuItem}>
            Home
          </Typography> */}
              {/* <Typography variant="h6" className={classes.menuItem}>
            Features
          </Typography> */}
              <Typography variant="h5" className={classes.menuItem}>
                Orange Enterprises
          </Typography>
              <Typography variant="h6" align="right" className={classes.title}>
                <Link href="https://orangeenterprises1.azurewebsites.net" target="_blank" color="textSecondary" component="a" className={classes.link}>
                  Client Login
                </Link>
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={false} lg={1} xl={2} />
        </Grid>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props} isSm={isSm}>
        <Fab 
          color="primary" 
          size="small" 
          aria-label="scroll back to top" 
          style={{ marginBottom: `${isSm ? "180px" : "250px"}` }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}