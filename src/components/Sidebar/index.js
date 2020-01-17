import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import AddNewList from '../Forms/AddNewList';
import { useStyles } from '../../styles/appCss';
import { ListContext, ListProvider } from '../../store/ListContext';

export default function Sidebar(props) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <ListContext.Consumer>
        {({ lists, selectedList, selectList,saveList }) => (
          <div>
            {
              lists.map(item=>(
                <ListItem button key={item.id} onClick={()=> selectList(item)}>
                    <ListItemIcon><InboxIcon />{item.parent}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
              ))
            }
            <AddNewList saveList ={saveList}/>    
          </div>
        )}
      </ListContext.Consumer>
    </Drawer>
  );

}
