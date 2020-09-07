console.log('JSX is working.');


class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {visibility : !prevState.visibility}
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility toogle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Now you can see details.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementsByClassName('root')[0]);

/*const fixedText = 'Hey, now you can see some details.';
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

render();*/