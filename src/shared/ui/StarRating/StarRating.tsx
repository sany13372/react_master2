import { memo, useState } from 'react';

import starIcon from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsCount: number) => void;
}
const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (curStar: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(curStar);
    }
  };
  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (curStar: number) => () => {
    if (!isSelected) {
      onSelect?.(curStar);
      setCurrentStarsCount(curStar);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((itemCount) => (
        <Icon
          className={classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarsCount >= itemCount,
              [cls.selected]: isSelected,
            },
            [],
          )}
          key={itemCount}
          Svg={starIcon}
          width={size}
          height={size}
          onMouseEnter={onHover(itemCount)}
          onMouseLeave={onLeave}
          onClick={onClick(itemCount)}
        />
      ))}
    </div>
  );
});
