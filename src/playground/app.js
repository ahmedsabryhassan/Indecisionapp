class IndecisionApp extends React.Component
{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleDeleteOpion=this.handleDeleteOpion.bind(this);
        this.state={
            option:props.option
        };
    }
    componentDidMount(){
        try{
            const json =  localStorage.getItem('options');
            const option = JSON.parse(json);
            if(option)
                this.setState(()=> ({option}));
        }catch(e){
            // do nothing
        }

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.option.length !== this.state.option.length)
        {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions(){
        this.setState((pervState)=> ({ option:[] }));
    }
    handleDeleteOpion(optionToRemove){
        this.setState((pervState)=> ({ option:pervState.option.filter(
                (option)=> ((optionToRemove != option))
            )})
        );
    }
    handleAddOption(optionadded){
        if (!optionadded){
            return `enter valid value to add item`;
        }
        else if(this.state.option.indexOf(optionadded)>-1)
            {return `option is already exist`;}
        this.setState((pervState)=> ( {option:pervState.option.concat(optionadded)} ));
    }
    handlePick(){
        const randomNum=Math.floor(Math.random()*this.state.option.length);
        alert(this.state.option[randomNum]);
    }
    render(){

        return (
            <div>
                <Header title="Here is a test" />
                <Action 
                    hasOptions={this.state.option.length>0}
                    pickOption={this.handlePick}
                />
                <Options
                    option={this.state.option}
                    deleteOptions ={this.handleDeleteOptions} 
                    deleteOption = {this.handleDeleteOpion}
                />
                <AddOptions
                    addOption={this.handleAddOption}
                />
            </div>
        );
    }
}
//Default vales of the class component props paramter
IndecisionApp.defaultProps = {
    option : []
}
///Add Header Component

const Header = (props) =>{
    return <p>Hello biches guess whose back! me {props.title} and me age is {props.age} </p>
};
// default values of the functional component props paramter
Header.defaultProps={
    title:`ahmed`,
    age:14
}
///Add Action Component

const Action = (props) =>{
    return <button 
        onClick={props.pickOption}
        disabled={!props.hasOptions}
        >
        What should I do!
    </button>;
};

///Options Component

const Options = (props) =>{
    return (
        <div>
            <button onClick={props.deleteOptions} >Delete all Options</button>
            <Option option1={props.option} deleteOption={props.deleteOption} />
        </div>
    );
}

///Option Component

const Option =(props)=>{
    let counter =0;
    return (
        <div>
        {props.option1.length ===0 && <p>Please enter some data</p>}
            {
                props.option1.map((option)=>( 
                    <div key={option}>
                        Number: {option} 
                        <button 
                            onClick={()=>{
                                props.deleteOption(option);
                            }}
                        >
                            Delete item
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

///Add Options Component

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.HandleAddOptions=this.HandleAddOptions.bind(this);
        this.state={
            error:undefined
        }
    }
    HandleAddOptions(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState( () =>  ({error }));
        e.target.elements.option.value=null;
    }
    render(){
        return (
        <div>
            { this.state.error && <p>{this.state.error}</p> }
            <form onSubmit={this.HandleAddOptions}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        );
    }
}

ReactDOM.render( <IndecisionApp /> , document.getElementById('app'));