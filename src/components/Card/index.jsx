import EnhancedTooltip from 'src/components/ui/EnhancedTooltip';

import defaultAvatar from 'src/assets/images/avatar.svg';

import styles from './Card.module.scss';

const Card = ({
  name,
  email,
  phone,
  position,
  photo,
}) => {
  const handleImageError = (e) => {
    e.target.src = defaultAvatar;
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__avatar}>
        <img
          src={photo || defaultAvatar}
          alt={name}
          onError={handleImageError}
        />
      </div>
      <EnhancedTooltip mods={['modCenter']}>{name}</EnhancedTooltip>
      <div className={styles.card__info}>
        <EnhancedTooltip mods={['modCenter']}>{position}</EnhancedTooltip>
        <EnhancedTooltip tag="a" mods={['modCenter']} href={`tel::${phone}`}>{phone}</EnhancedTooltip>
        <EnhancedTooltip tag="a" mods={['modCenter']} href={`mailto:${email}`}>{email}</EnhancedTooltip>
      </div>
    </div>
  );
};

export default Card;
