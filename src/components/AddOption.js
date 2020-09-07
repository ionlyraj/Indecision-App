import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (event) => {
        event.preventDefault();
        const item = event.target.elements.option.value.trim();

        const error = this.props.handleAddOption(item);

        this.setState(() => ({ error }))
        if (!error) {
            event.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='option'></input>
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}