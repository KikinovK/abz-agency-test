import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import { getCursorHeight } from 'src/utils';

import styles from './EnhancedTooltip.module.scss';

const EnhancedTooltip = ({ children, tag: Tag = 'div', mods=[], ...restProps  }) => {
  const [width, setWidth] = useState(NaN);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);
  const ref = useRef(null);

  const classNames = [styles.element, ...mods.map(mod => styles[`element--${mod}`])].join(' ');
  const cursorHeight = getCursorHeight();

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        if (ref.current.parentNode) {
          setWidth(ref.current.parentNode.offsetWidth);
        }
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

  const handleMouseOver = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    setTooltipPosition({ x: mouseX, y: mouseY + cursorHeight });
    setIsVisibleTooltip(true);
  };


  const handleMouseOut = () => {
    setIsVisibleTooltip(false);
  };

  return (
    <>
      <Tag
        className={classNames}
        ref={ref}
        style={{ maxWidth: `${width}px` }}
        onMouseMove={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...restProps}
      >
        {children}
      </Tag>
      {isVisibleTooltip && (
        <div
          className={styles.element__tooltip}
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default EnhancedTooltip;
