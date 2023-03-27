import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import css from './Filter.module.css'

export const Filter = ({onChange, value}) => {
    const filterId = nanoid();
  return (
    <div className={css.filter} >
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
       className={css.filterInput} id={filterId} type="text" value={value} onChange={onChange} name="filter" />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}