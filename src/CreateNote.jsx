import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=>{
    
    const[expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title:"",
        content:"",
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            };
        }); console.log(note);
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({title:"",
        content:"",}) 
    }

    const expandit=()=>{
        setExpand(true);
    }
    
    const backtoNormal=()=>{
        setExpand(false);
    } 

    return<>
        <div className="main_note" onDoubleClick={backtoNormal}>
        <form>
        {expand?
            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Tittle" autoComplete="off" /> :null}
            <textarea rows='' column='' name="content" value={note.content} onChange={InputEvent} placeholder='write a note...' onClick={expandit}></textarea>

            {expand?
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button> :null}
        </form>

        </div>
    </>;
}

export  default CreateNote;