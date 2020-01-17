import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {useStyles} from './styles/appCss';
import { ListContext, ListProvider } from './store/ListContext';

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ListProvider>
      <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
      </ListProvider>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}