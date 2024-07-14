import styles from './TitleSection.module.scss';

const TitleSection = ({ children, tag: Tag = 'h2', mods=[], ...restProps  }) => {
  const classNames = [styles.title, ...mods.map(mod => styles[`title--${mod}`])].join(' ');

  return (
    <Tag className={classNames}  {...restProps}>{children}</Tag>
  );
};

export default TitleSection;
