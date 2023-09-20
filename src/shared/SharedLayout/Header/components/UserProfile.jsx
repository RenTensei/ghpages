import { useSelector } from 'react-redux';
import ArrowDownSvg from '../svg components/ArrowDownSvg';
import styles from './UserProfile.module.scss';
import { useModalContext } from '@/context/ModalContext';

const UserProfile = () => {
  const { openModal } = useModalContext();

  const userData = useSelector(state => state.auth.user);

  return (
    <div className={styles.header_user_profile_cont}>
      <button
        onClick={() => openModal('ModalUser')}
        className={styles.header_user_profile}
      >
        <p className={styles.header_user_profile_name}>{userData.name}</p>
        <img
          src="https://th.bing.com/th?q=Cat+Face&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=fr-FR&cc=FR&setlang=en&adlt=moderate&t=1&mw=247"
          alt="user"
          className={styles.header_user_profile_img}
        />
        <ArrowDownSvg />
      </button>
    </div>
  );
};

export default UserProfile;
