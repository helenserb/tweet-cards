import PropTypes from 'prop-types';
import { SelectStyled } from './Dropdown.styled';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const Dropdown = ({ filter, handleChangeValue }) => {
  const getValue = () =>
    filter ? options.find(({ value }) => value === filter) : '';

  return (
    <SelectStyled
      options={options}
      defaultValue={options[1]}
      value={getValue()}
      onChange={handleChangeValue}
      theme={theme => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: '#5cd3a8',
          primary: '#5736a3',
        },
      })}
    />
  );
};

Dropdown.propTypes = {
  filter: PropTypes.string,
  handleChangeValue: PropTypes.func.isRequired,
};
