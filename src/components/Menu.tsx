import React, { CSSProperties } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useMediaQuery } from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


type Anchor =  'left' | 'right';

export default function Menu() {
  const theme = useTheme();
  const classes = useStyles();

  const sizeSmall = useMediaQuery(theme.breakpoints.up('sm'));




  const [state, setState] = React.useState({
    left: false,
    right: false,
  });



  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
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
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left' || anchor === 'right',
      })}
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
      <Divider />
    </div>
  );

  if(sizeSmall === true) {
    return (
      <div>
        {(['left'] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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