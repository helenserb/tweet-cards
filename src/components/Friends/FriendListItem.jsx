import css from "./Friends.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export const FriendListItem = ({avatar, name, isOnline, }) => {
    return (
              <li  className={css.item}>
                <span className={clsx(css.status, isOnline && css.isOnline)}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
              </li> 
    );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,

};

