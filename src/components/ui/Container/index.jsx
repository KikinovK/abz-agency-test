import styles from './Container.module.scss';

const Container = ({ mods=[], children, ...restProps }) => {
  const classNames = [styles.container, ...mods.map(mod => styles[`container--${mod}`])].join(' ');

  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
