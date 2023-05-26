import PropTypes from 'prop-types';
import defaultAvatar from '../Profile/defavatar.png';

const FriendListItem = ({ avatar = defaultAvatar, name, isOnline }) => {
  return (
    // <ul class="friend-list"></ul>

    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
