import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header--element">Your Options</h3>
            <button
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Remove All
        </button>
        </div>

        {props.component.length === 0 && <p className="widget--message">Please add an option to get started.</p>}
        {props.component.map((option,index) => (
            <Option
                key={option}
                optionText={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption} 
            />
        ))
        }
    </div>
);

export default Options;