// Write your Character component here
import React from 'react';

const Character = props => {
    return (
        <div className='character'>
            <h3>{props.info.name}</h3>
            {/* <p><CharacterDetails /></p> */}
        </div>
    )
}

export default Character;