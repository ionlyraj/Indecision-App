import React, { useContext } from 'react';
import OptionsContext from '../context/options-context';

const Option = (props) => {
    const { options, dispatch } = useContext(OptionsContext);

    return (
        <div className="option">
            <p className="option__text">{props.count} : {props.optionText}</p>
            <button className="button button--link"
                onClick={() => {
                    dispatch({ type: 'DELETE_OPTION', option: props.optionText });
                }}
            >
                Remove
            </button>
        </div>
    )
};

export default Option;