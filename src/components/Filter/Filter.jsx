import { nanoid } from 'nanoid';
import css from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();
  const filterId = nanoid();

    const handleChange = ({ target }) => {
    dispatch(getFilter(target.value));
  };

  
  return (
    <div className={css.filter} >
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
       className={css.filterInput} id={filterId} type="text" value={filter} onChange={handleChange} name="filter" />
    </div>
  );
};

