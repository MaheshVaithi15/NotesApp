import React from 'react';

const Header = ({ handleToggleDark }) => {
  return (
    <div className='header'>

        <h1>Notes App</h1>

        <button onClick={()=> handleToggleDark((previousDM)=> !previousDM)} className='save'>Dark Mode</button>

    </div>
  )
}

export default Header;