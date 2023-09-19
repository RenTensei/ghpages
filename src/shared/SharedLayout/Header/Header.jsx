import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import AuthNavigation from '../Header/components/AuthNavigation';
import UserMenu from '../Header/components/UserMenu';
import styles from './Header.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile';

import arrowDownSvg from '@/assets/svg/arrow-down.svg';
import { ReactComponent as MenuSvg } from '@/assets/svg/menu.svg';

const Header = () => {
  const { openModal } = useModalContext();
  const isLoggedIn = true;

  // const [width, setWidth] = useState({ width: window.innerWidth });
  // const breakpoint = 834;

  // console.log(width);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => setIsMenuOpen(s => !s);

  // const handleResize = () => {
  //   setWidth({
  //     width: window.innerWidth,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [setWidth]);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_wrapper}>
          <Link
            className={styles.header_logo}
            to={`/${ROUTES.HomePage}`}
            relative="path"
          >
            HealthyHub
          </Link>

          {isLoggedIn && (
            <button
              className={styles.header_tablet_menu}
              // onClick={() => toggleMenu()}
              onClick={() => openModal('ModalMenuTablet')}
              type="button"
            >
              <MenuSvg
                className={styles.menuBtn}
                width={24}
                height={24}
                stroke={isMenuOpen ? '#E3FFA8' : '#B6B6B6'}
              />
            </button>
          )}
        </div>

        {isLoggedIn && <UserMenu />}

        <div className={styles.header_user_info}>
          {isLoggedIn ? <UserProfile /> : <AuthNavigation />}
        </div>

        {/* {isLoggedIn && isMenuOpen && <ModalMenuTablet />} */}
      </div>
    </header>
  );
};

export default Header;
