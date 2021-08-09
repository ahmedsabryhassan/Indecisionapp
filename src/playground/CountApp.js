class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.Reset=this.Reset.bind(this);
        this.state={
            count:props.count
        };
    }
    componentDidMount(){
        try{
            const json =  localStorage.getItem('count');
            const count = JSON.parse(json);
            if(count)
                this.setState(()=> ({count}));
        }catch(e){
            // do nothing
        }

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count)
        {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    addOne(){
        //prevstate hena al paramter byb2a al object al 25yr al mogod fy al class men al state we 22dr a3ml access l 2y haga 3nado we a8yerha
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
    }
    minusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    Reset(){
        this.setState((prevState)=>{
            return {
                count: 0
            };
        });
        
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }    
}

Counter.defaultProps = {
    count:0
}
ReactDOM.render(<Counter />,document.getElementById(`app`));
























/*
let count = 2;

const addOne = () =>{
    count++;
    Starter();
}
const minusOne = () =>{
    count--;
    Starter();
}
const Reset = () =>{
    count=0;
    Starter();
}


const AppRoot = document.getElementById("app");
const Starter = () =>{
    const templete =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );   
    ReactDOM.render(templete,AppRoot);
}
Starter(); 
*/







/*
    // creating object in Js
    const ahmed = {
        name:"Ahmed",
        age:18,
        leve:50,
        location:"egypt"
    }
    // creating a function in Js
    function getLocation(loco){
        if(loco!=null)
            return <h1>Location: {loco}</h1> ;
        else
            return <h1>Location: unknown</h1> ;
    }
    // for logical and we got statment && what happens if statment true
    const templete = (
        <div>
            <h1>name: {ahmed.name?ahmed.name:"anonymous"}</h1>
            {ahmed.age>=18 && <h1>Age: {ahmed.age}</h1>}
            <h1>Level: {ahmed.leve}</h1>
            {getLocation(ahmed.location)}
        </div> 
    );
*/
