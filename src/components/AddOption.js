import React, { useContext, useState } from 'react';
import OptionsContext from '../context/options-context';

const AddOption = () => {
  const { options, dispatch } = useContext(OptionsContext);
  const [errorvalue, setErrorFunction] = useState('');

  const handleAddOption = (event) => {
    event.preventDefault();
    const item = event.target.elements.option.value.trim();

    if (!item) {
      setErrorFunction('Enter valid value to add item');
    }
    else if (options.indexOf(item) > -1) {
      setErrorFunction('this option already exits');
    } else {
      dispatch({ type: 'ADD_OPTION', option: item });
      event.target.elements.option.value = '';
      setErrorFunction('');
    }
  }

  return (
    <div>
      {errorvalue && <p className="add-option-error">{errorvalue}</p>}
      <form className="add-option" onSubmit={handleAddOption}>
        <input className="add-option__input" type='text' name='option'></input>
        <button className="button">Add option</button>
      </form>
    </div>
  )
}

export default AddOption;
