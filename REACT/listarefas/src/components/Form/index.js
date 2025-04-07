import React from "react";
import {FaPlus, FaEdit, FaWindowClose} from 'react-icons/fa';

import './form.css';

export default function Form({handleSubmit, inputMudou, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={inputMudou} type="text"  value={novaTarefa}/>
        <button type="submit">
          <FaPlus />
        </button>
     </form>
  );
}
