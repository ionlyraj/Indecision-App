import React from 'react';

const Option = (props) => {
    return (
        <div>
            Next Item : {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
}

export default Option;