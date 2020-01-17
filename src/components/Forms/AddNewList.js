import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function AddNewList(props) {

    const [list ,setList] = useState();
    const handleListData = e => {
        setList({
            ...list,
            [e.target.name]: e.target.value,
            parent : "ddd"
          });
    };
    const addNewList = function(e){
        e.preventDefault();
        props.saveList(list);
    };

    return (
        <form onSubmit={addNewList} >
            <FormControl>
                <TextField
                    name="name"
                    label=" + New List"
                    onChange = {handleListData}
                />
            </FormControl>
        </form>
    );
}