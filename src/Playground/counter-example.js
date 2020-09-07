const app = {
    title : "This is start.",
    subtitle : "Today is independence day of India.",
    options : ['One', 'Two']
}

const templet = (
    <div>
        <p>{app.title}</p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? 'Here are your options' : undefined}</p>
    </div>
);

let count = 0;

const minusOne = function(){
    count--;
    renderCounterApp();
};

const plusOne = () => {count++; renderCounterApp();};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementsByClassName("root")[0];

const renderCounterApp = () => {
    const templetTwo = (
        <div>
            <h1> Count : {count} </h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templetTwo,appRoot);
}

renderCounterApp();