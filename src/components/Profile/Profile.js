import PropTypes from 'prop-types';
import styles from 'components/Profile/Profile.module.css';
import defaultAvatar from './defavatar.png';
import { addComas } from '../../helpes/functions';

const Profile = ({
  username = defaultAvatar,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar ?? defaultAvatar}
          alt="User avatar"
          className={styles.avatar}
          width="200"
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{addComas(stats.followers)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{addComas(stats.views)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{addComas(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
