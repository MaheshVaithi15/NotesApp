import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const[noteText,setNoteText] = useState('');
    const charlimit=250;

    const handleChange = (event) =>{
        if(charlimit - event.target.value.length >=0)
        {
            setNoteText(event.target.value);
        }
        

    }

    const handleSaveClick = () =>{
        if(noteText.trim().length>0)
        {
            handleAddNote(noteText)
            setNoteText('');
        }
        
    }


  return (
    <div className='notenew'>
        <textarea rows="10" cols="10" placeholder='Type To Add A Note Here' onChange={handleChange} value={noteText}>
            
        </textarea>

        <div className='notefooter'>
            <small>{charlimit - noteText.length} Words Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>

    </div>
  )
}

export default AddNote;