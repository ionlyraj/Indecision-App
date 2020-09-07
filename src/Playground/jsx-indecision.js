console.log("React js is running.");

// JSX - Javascript XML

const app = {
    title : "This is start.",
    subtitle : "Today is independence day of India.",
    options : []
}

const addItem = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

}

const removeAll = () => {
    app.options = [];
    render();
}
const appRoot = document.getElementsByClassName("root")[0];

const render = () => {

    const templet = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options: ' : undefined}</p>
            <p>{app.options.length}</p>

            <button onClick = {removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((element) => {
                        return <li key={app.options.indexOf(element)} >{element}</li>;
                    })
                }
            </ol>
    
            <form onSubmit = {addItem}>
                <input type = "text" name="option"></input>
                <button>Add Item!</button>
            </form>
        </div>
    );
    
    ReactDOM.render(templet,appRoot);
}

render();