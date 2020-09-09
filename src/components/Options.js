import React, { useContext } from 'react';
import Option from './Option';
import OptionsContext from '../context/options-context';

const Options = () => {
  const { options, dispatch } = useContext(OptionsContext);

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header--element">Your Options</h3>
        <button
          onClick={() => {dispatch({type: 'DELETE_OPTIONS'})} }
          className="button button--link"
        >
          Remove All
        </button>
      </div>

      {options.length === 0 && <p className="widget--message">Please add an option to get started.</p>}
      {options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
        />
      ))
      }
    </div>
  )
};

export default Options;