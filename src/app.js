import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const TestError = () => {
//   const [error, setError] = useState('');

//   const handleAddOption = (e) => {
//     e.preventDefault();
//     const item = e.target.elements.option.value;
//     if(!item){
//       setError('Please enter correct value');  
//     } else {
//       setError(item);
//     }

//   }

//   return (
//     <div>
//       <h1>Option: {error}</h1>
//       <form onSubmit={handleAddOption}>
//         <input type='text' name='option'></input>
//         <button>Add option</button>
//       </form>
//     </div>
//   )

// }


ReactDOM.render(<IndecisionApp />, document.getElementsByClassName('root')[0]);