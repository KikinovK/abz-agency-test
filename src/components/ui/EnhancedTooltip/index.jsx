import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import styles from './EnhancedTooltip.module.scss';

const EnhancedTooltip = ({ children, tag: Tag = 'div', mods=[], ...restProps  }) => {
  const [width, setWidth] = useState(NaN);
  const ref = useRef(null);

  const classNames = [styles.tooltip, ...mods.map(mod => styles[`tooltip--${mod}`])].join(' ');

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        console.log('ref.current', ref.current);
        console.log('ref.current.offsetWidth', ref.current.offsetWidth);
        console.log('ref.current.parentNode.offsetWidth', ref.current.parentNode.offsetWidth);
        setWidth(ref.current.parentNode.offsetWidth);
      };

      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(ref.current.parentNode);

      handleResize();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref.current]);

  return (
    <Tag
      className={classNames}
      ref={ref}
      style={{ maxWidth: `${width}px` }}
      {...restProps}>{children}
    </Tag>
  );
};

export default EnhancedTooltip;
