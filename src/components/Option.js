import React from 'react';

const Option =(props)=> (
    <div className="widget__massege">
    {props.option1.length ===0 && <p>Please enter some data</p>}
        {
            props.option1.map((option,index)=>( 
                <div 
                    key={option}
                    className="option"
                >
                        {<p className="option__text" >{index+1}. {option}</p>} 
                    <button 
                        onClick={()=>{props.deleteOption(option);}}
                        className="button button--link"
                    >
                        Delete item
                    </button>
                </div>
            ))
        }
    </div>
);
export default Option;