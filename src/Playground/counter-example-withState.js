class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        const count = localStorage.getItem('count');
        let countValue = parseInt(count);
        if(!isNaN(countValue)){
            this.setState(() => { return {count : countValue}})
        }
    }


    componentDidUpdate(props,prevState){
        if(prevState.count !== this.state.count ){
            localStorage.setItem('count',this.state.count)
        }
    }

    plusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementsByClassName('root')[0]);
/*let count = 0;

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

renderCounterApp();*/