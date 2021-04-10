import React from 'react';
import cx from 'clsx';

import Box from './Box.js';
import styles from './FlexBox.scss';

const Flex = (props) => {
    const { direction, wrap, className, children, ...restProps } = props;

    const directionClassname = styles[`direction-${direction}`];
    const wrapClassname = styles[`wrap-${wrap}`];

    return (
        <Box className={cx(styles.flex, directionClassname, wrapClassname, className)} {...restProps}>
            {children}
        </Box>
    );
};

export default Flex;
