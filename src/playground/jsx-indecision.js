const AppRoot = document.getElementById("app");
const app={
    name:"bola",
    subtitle:"domb al bomb",
    options:[]
}
const onSubmitOption = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value=null;
    reRenderingApp();
    }
}
const onMakeDecision = () => {
    const randomNumb = Math.floor(Math.random()*app.options.length);
    const selectedObj = app.options[randomNumb];
}
const numbers = [15,146,179,19,419];
let counter = 0; 
const reRenderingApp= () =>{
    const templete = (
        <div>
            <h1>{app.options.length}</h1>
            <ul>
            {
                app.options.map((option)=> <li key={counter++}>Number: {option}</li>)
            }
            </ul>
            <form onSubmit={onSubmitOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            <button onClick={()=>{app.options=[];reRenderingApp();}}>remove All</button>
            <button disabled={app.options==0} onClick={onMakeDecision}>What should i do~!</button>
            <p>You gonna do {}</p>
        </div>
    );
    
    ReactDOM.render(templete,AppRoot);
}
reRenderingApp();
