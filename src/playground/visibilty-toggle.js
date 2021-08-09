class VisibiltyToggle extends React.Component {
    constructor(props){
        super(props);
        this.clickingButton = this.clickingButton.bind(this);
        this.state={
            isClickeded:false
        }
    }
    clickingButton(){
        this.setState((prevState)=>{
            return{
                isClickeded:!prevState.isClickeded
            }
        });
        this.isClickeded = !this.isClickeded;
    }
    render(){
        return(
            <div>
                <h1>Visibilty Test</h1>
                <button onClick={this.clickingButton}>{this.isClickeded?"hide detils":"show detils"}</button>
                {
                    this.isClickeded && <p>Here is some detils you can read!</p>
                }
            </div>
        );
    }
}
ReactDOM.render(<VisibiltyToggle/>,document.getElementById(`app`));


/*
const AppRoot = document.getElementById("app");
let isClickeded = false;
const clickingButton = () =>{
    isClickeded = !isClickeded;
    reRenderingApp();
}
const reRenderingApp = () =>{
    const templete = (
        <div>
            <h1>Visibilty Test</h1>
            <button onClick={clickingButton}>{isClickeded?"hide detils":"show detils"}</button>
            {
                isClickeded && <p>Here is some detils you can read!</p>
            }
        </div>
    );
    ReactDOM.render(templete,AppRoot);
}
reRenderingApp();
*/