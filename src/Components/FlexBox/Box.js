import React from 'react';
import cx from 'clsx';

import styles from './FlexBox.scss';

const Box = (props) => {
    const { alignItems, justifyContent, className, children, ...restProps } = props;

    const AlignItemsClassname = styles[`align-items-${alignItems}`];
    const JustifyClassname = styles[`justify-content-${justifyContent}`];

    return (
        <div className={cx(styles.box, AlignItemsClassname, JustifyClassname, className)} {...restProps}>
            {children}
        </div>
    );
};

export default Box;
