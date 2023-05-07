import css from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(getFilter(target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={filter}>
        Find contacts by name:{' '}
      </label>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
        name="filter"
      />
    </div>
  );
};

