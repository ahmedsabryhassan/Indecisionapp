import React from  'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './optionModal';

export default class IndecisionApp extends React.Component
{
    state={
        option:[],
        selectedOption:undefined
    };
    handleDeleteSelectedOption = () =>{
        this.setState((pervState)=> ({ selectedOption:undefined }));
    }
    handleDeleteOptions=()=>{
        this.setState((pervState)=> ({ option:[] }));
    };
    handleDeleteOpion=(optionToRemove)=>{
        this.setState((pervState)=> ({ option:pervState.option.filter(
                (option)=> ((optionToRemove != option))
            )})
        );
    };
    handleAddOption=(optionadded)=>{
        if (!optionadded){
            return `enter valid value to add item`;
        }
        else if(this.state.option.indexOf(optionadded)>-1)
            {return `option is already exist`;}
        this.setState((pervState)=> ( {option:pervState.option.concat(optionadded)} ));
    };
    handlePick=()=>{
        const randomNum=Math.floor(Math.random()*this.state.option.length);
        this.setState((pervState)=> ({ selectedOption:this.state.option[randomNum] }));
    };
    componentDidMount(){
        try{
            const json =  localStorage.getItem('options');
            const option = JSON.parse(json);
            if(option)
                this.setState(()=> ({option}));
        }catch(e){
            // do nothing
        }

    };
    componentDidUpdate(prevProps,prevState){
        if(prevState.option.length !== this.state.option.length)
        {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem('options', json);
        }
    };
    render(){

        return (
            <div>
                <Header/>
                <div className="container" >
                    <Action 
                        hasOptions={this.state.option.length>0}
                        pickOption={this.handlePick}
                    />
                    <div className="widget" >
                        <Options
                            option={this.state.option}
                            deleteOptions ={this.handleDeleteOptions} 
                            deleteOption = {this.handleDeleteOpion}
                        />
                        <AddOptions
                            addOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                />
            </div>
        );
    }
}
//Default vales of the class component props paramter
IndecisionApp.defaultProps = {
    option : []
}