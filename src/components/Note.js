import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note'>
        <span className=''>{text}</span>
        <div className='notefooter'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=> handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
        </div>

    </div>
  )
}

export default Note;
