import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  selectedList: {
    id: 1,
    name: 'Learn more hooks',
    parent : 'all'
  },
  lists: [
    {
      id: 1,
      name: 'Learn hooks',
      parent : 'all'
    },
    {
      id: 2,
      name: 'Implement global state'
    },
    {
      id: 3,
      name: 'Play around it'
    },
  ],
};


export const ListContext = createContext({});

export const ListProvider = props => {
  // Initial values are obtained from the props
  const {
    children
  } = props;

  // Use State to keep the values
  const [selectedList, setSelectedList] = useState(initialState.selectedList);
  const [lists, setLists] = useState(initialState.lists);

  const selectList = (newcurrent) => {
    setSelectedList(newcurrent);
  };

  const saveList = (list) => {
    const newList = {
      id: Math.random(),
      name: list.name,
      parent: list.parent
    };
    setLists([...lists, newList ]);
   };

  const contextState = {
    selectedList : selectedList,
    selectList : selectList,
    saveList : saveList,
    lists : lists
  };

  return <ListContext.Provider value={contextState}>{children}</ListContext.Provider>;
};

