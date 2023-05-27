import PropTypes from 'prop-types';
import defaultAvatar from '../Profile/defavatar.png';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar = defaultAvatar, name, isOnline }) => {
  return (
    // <ul class="friend-list"></ul>

    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
