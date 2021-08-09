import React from  'react';

export default class AddOptions extends React.Component {
    state={
        error:undefined
    };
    HandleAddOptions=(e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState( () =>  ({ error }));
        e.target.elements.option.value=null;
    };
    render(){
        return (
        <div>
            { this.state.error && <p className="add-option-error" >{this.state.error}</p> }
            <form 
                onSubmit={this.HandleAddOptions}
                className="add-option"
            >
                <input className="add-option__input" type="text" name="option"/>
                <button className="button" >Add option</button>
            </form>
        </div>
        );
    }
}