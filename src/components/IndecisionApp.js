import React, { useState, useEffect, useReducer } from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import optionsReducer from '../reducers/options';
import OptionsContext from '../context/options-context';

const IndecisionApp = () => {
  const [options, dispatch] = useReducer(optionsReducer, []);
  const [selectedOption, setSelectedOption] = useState('');

  const handlePick = () => {
    let option = options[Math.floor(Math.random() * options.length)];
    setSelectedOption(option);
  };

  const handleClearSelectedOption = () => {
    setSelectedOption('');
  }

  useEffect(() => {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      dispatch({ type: 'POPULATE_OPTIONS', options })
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(options);
    localStorage.setItem('options', json);
  }, [options]);

  const title = 'Indecision App';
  return (
    <OptionsContext.Provider value={{ options, dispatch }}>
      <Header
        title={title}
      />
      <div className="container">
        <Action
          hasOptions={options.length > 0}
          handlePick={handlePick}
        />
        <div className="widget">
          <Options />
          <AddOption />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      />
    </OptionsContext.Provider>
  )
};

export default IndecisionApp;
