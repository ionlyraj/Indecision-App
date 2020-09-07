import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }))
    }

    handlePick = () => {
        let option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => {
            return { selectedOption: option }
        })
    }

    handleClearSelectedOption = () => {
        this.setState(() => {
            return { selectedOption: undefined }
        })
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exits';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing.
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'This is new subtitle';
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            component={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />

                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}