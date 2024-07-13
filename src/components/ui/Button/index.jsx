import styles from './Button.module.scss';

const Button = ({ mods=[], children, ...restProps }) => {
  const classNames = [styles.btn, ...mods.map(mod => styles[`btn--${mod}`])].join(' ');

  if ('href' in restProps) {
    const { href, ...anchorProps } = restProps;
    return (
      <a href={href} className={classNames} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
