import { nanoid } from 'nanoid';
import css from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { selectedFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const filterId = nanoid();

    const handleChange = ({ target }) => {
    dispatch(selectedFilter(target.value));
  };

  
  return (
    <div className={css.filter} >
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
       className={css.filterInput} id={filterId} type="text" value={filter} onChange={handleChange} name="filter" />
    </div>
  );
};

