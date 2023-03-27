import { nanoid } from 'nanoid';
import css from './Filter.module.css'

export const Filter = ({onChange}) => {
    const filterId = nanoid();
  return (
    <div className={css.filter} >
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
       className={css.filterInput} id={filterId} type="text" onChange={onChange} name="filter" />
    </div>
  );
};
