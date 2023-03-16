import {FriendListItem} from './FriendListItem';
import PropTypes from "prop-types";
import css from "./Friends.module.css";

export const FriendList = ({friends}) => (  
    <ul  className={css.friendList}>
    {friends.map(({id, isOnline, avatar, name}) => (
        <FriendListItem 
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}/>                       
        ))}
  </ul>);


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact
    ({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

    }).isRequired)
};






