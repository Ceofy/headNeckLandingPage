import React from 'react';
import PropTypes from 'prop-types';

import LinkOut from './linkOut';

import styles from './componentStyles/header.module.css';
import ucsdLogo from '../images/UCSanDiegoLogo-White.png';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.left}>
      <LinkOut link='https://medschool.ucsd.edu/Pages/default.aspx'>
        <img src={ucsdLogo} className={styles.logo} />
      </LinkOut>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
