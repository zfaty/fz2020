import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from '../../styles/appCss';
import { ListContext } from '../../store/ListContext';
export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>

        <ListContext.Consumer>
          {({ selectedList }) => (
            <Typography variant="h6" noWrap> Just Do : {selectedList.name}</Typography>
          )}
        </ListContext.Consumer>
      </Toolbar>
    </AppBar>
  );
}

