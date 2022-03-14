import React, {CSSProperties} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'left' | 'right';

export default function SwipeableTemporaryDrawer() {

    const classes = useStyles();


    const theme = useTheme();
    const sizeSmall = useMediaQuery(theme.breakpoints.up('sm'));

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'left' || anchor === 'right' ? 'auto' : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem>
          <ListItemText>WELCOME
            </ListItemText>
        </ListItem>
        <ListItem button>
{/*           <Link to={home}> */}
          <ListItemText> HEM </ListItemText>
{/*           </Link> */}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText> NYHETER </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText> INSPIRATION </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText> KATEGORIER </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText> MITT KONTO </ListItemText>
        </ListItem>
      </List>
    </Box>
  );



  if(sizeSmall === true) {
    return (
      <div>
        {(['left'] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
            <SwipeableDrawer
              classes={{paper: classes.paper}}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }else {
    return (
      <div>
        {(['right'] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
            <SwipeableDrawer
              classes={{paper: classes.paper}}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }; 
};



const useStyles = makeStyles({
    list: {
      width: 250,
      background: '#BFD8D5',
      color: 'black',
    },
    fullList: {
      width: 'auto',
      background: '#BFD8D5',
      color: 'black',
    },
    paper:{
      background: '#BFD8D5',
    }
  });