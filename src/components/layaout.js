import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import { Link } from "gatsby";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    //backgroundColor: theme.background.primary
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    // padding: theme.spacing(3),
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;

export default function Layout({ children }) {
  const auth = useSelector(state => state.auth);
  //console.log(auth, 'auth')
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${classes.root} root-layout`}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        variant="permanent"
        color="primary"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}

      >
        <div className={classes.toolbar}>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            {
              name: "Peliculas",
              Icon: LocalMoviesIcon,
              uri: "/"
            }
          ].map((op, index) => {
            const Icon = op.Icon;
            return (
              <StyledLink color="primary" to={op.uri} key={index}>
                <ListItem button color="primary">
                  <ListItemIcon>{<Icon />}</ListItemIcon>
                  <ListItemText  color="primary"primary={op.name} />
                </ListItem>
              </StyledLink>
            )
          })}
        </List>
      </Drawer>
      <main className={`${classes.content} main-layout`}>
        {/* <div className={classes.toolbar} /> */}
        {children}
      </main>
    </div>
  );
}

