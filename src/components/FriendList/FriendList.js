import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friendsList }) => {
  return (
    <ul class="friend-list">
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
