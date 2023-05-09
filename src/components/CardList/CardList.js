import PropTypes from 'prop-types';
import { CardItem } from 'components/CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = ({ currentUsers, handleClickBtn }) => (
  <List>
    {currentUsers &&
      currentUsers.map(user => (
        <CardItem key={user.id} user={user} handleClickBtn={handleClickBtn} />
      ))}
  </List>
);

CardList.propTypes = {
  currentUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
