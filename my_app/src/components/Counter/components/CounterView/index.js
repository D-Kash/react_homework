import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CounterView = ({countValue, handleIncrement}) => {
    return (
       <div className={styles.wrapper}>
           <div className={styles.display}>{countValue}</div>
           <div className={styles.buttonsWrapper}>
               <button>-</button>
               <button>Reset</button>
               <button onClick={handleIncrement}>+</button>
           </div> 
       </div>
    );
};

CounterView.propTypes = {
    countValue: PropTypes.number.isRequired,
};

export default CounterView;