import React from 'react';
import PropTypes from 'prop-types';

import styles from './componentStyles/buttonLink.module.css';

const ButtonLink = (props) => {
  return (
    <div className={props.tooltip ? styles.tooltip : ''}>
      <a href={props.link} target='_blank' className={styles.noUnderline}>
        <div
          className={[
            styles.divClass,
            props.vertical ? styles.vertical : styles.horizontal,
          ].join(' ')}
        >
          {props.text}
        </div>
      </a>
      <span
        className={[
          styles.tooltipText,
          props.tooltipPosition === 'top' ? styles.top : styles.bottom,
        ].join(' ')}
      >
        {props.tooltipText}
      </span>
      <span
        className={[
          styles.tooltipConnector,
          props.tooltipPosition === 'top' ? styles.top : styles.bottom,
        ].join(' ')}
      />
    </div>
  );
};

ButtonLink.propTypes = {
  text: [PropTypes.string, PropTypes.node],
  link: PropTypes.string,
  vertical: PropTypes.bool,
  tooltip: PropTypes.bool,
  tooltipPosition: PropTypes.string,
  tooltipText: [PropTypes.string, PropTypes.node],
};

export default ButtonLink;
