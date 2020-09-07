console.log('JSX is working.');

const fixedText = 'Hey, now you can see some details.';
let showText = '';

const viewDetails = () => {
    showText = fixedText;
    render();
}

const hideDetails = () => {
    showText = '';
    render();
}

const appRoot = document.getElementsByClassName('root')[0];

const render = () => {
    const templet = (
        <div>
            <h1>Visibility toggle</h1>
            {showText ? <button onClick={hideDetails}>Hide details</button> : <button onClick={viewDetails}>View details</button> }
            <p>{showText}</p>
        </div>
    );

    ReactDOM.render(templet, appRoot);
}

render();



