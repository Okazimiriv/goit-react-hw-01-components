import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friendsList }) => {
  return (
    <ul className={styles.friendsList}>
      {friendsList.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id.toString()}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default FriendList;
