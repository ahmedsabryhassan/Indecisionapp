import React from 'react';

const Action = (props) =>(
    <button 
        className ="big-button"
        onClick={props.pickOption}
        disabled={!props.hasOptions}
        >
        What should I do!
    </button>
);

export default Action;