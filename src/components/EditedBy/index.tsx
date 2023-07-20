/**
 * Use this component to add edited by
 */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  updated: PropTypes.string,
  date: PropTypes.string.isRequired,
};
const defaultProps = {
  updated: '',
};
const EditedBy = ({name, updated, date}) => (
  <div className={styles.editedBy}>
    <div className={`${styles.block} ${date ? '' : styles.single}`}>
      <span className={styles.label}>Author</span>
      <span className={styles.value}>{name}</span>
    </div>
    {updated ? (
      <div className={`${styles.block} ${date ? styles.double : ''}`}>
        <span className={styles.label}>Updated by</span>
        <span className={styles.value}>{updated}</span>
      </div>
    ) : null}
    <div className={`${styles.block} ${date ? styles.double : ''}`}>
      <span className={styles.label}>On</span>
      <span className={styles.value}>{date}</span>
    </div>
  </div>
);

EditedBy.propTypes = propTypes;
EditedBy.defaultProps = defaultProps;
export default EditedBy;
