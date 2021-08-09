import React from 'react';
import Option from  './Option';

const Options = (props) =>(
    <div>
        <div className="widget-header" >
            <h3 className="widget-header__title" >Your Options</h3>
            <button
            onClick={props.deleteOptions}
            className="button button--link"
            >
                Delete all Options
            </button>
        </div>
        <Option option1={props.option} deleteOption={props.deleteOption} />
    </div>
);

export default Options;