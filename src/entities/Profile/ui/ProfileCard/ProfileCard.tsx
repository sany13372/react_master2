import { useTranslation } from 'react-i18next';

import { CountrySelect, Country } from '@/entities/Country';
import { CurrencySelect, Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean,
  error?: string;
  readonly?: boolean;
  onChangeFirst?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirst,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editForm]: !readonly,
  };

  if (isLoading) {
    return (
      <VStack max justify="center" align="center" className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('profile error')}
          text={t('profile error text')}
          align={TextAlign.CENTER}
        />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar
        && (
          <HStack justify="center" className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </HStack>
        )}
      <Input
        value={data?.first}
        placeholder={t('input firstname')}
        readonly={readonly}
        onChange={onChangeFirst}
        data-testid="ProfileCard.firstname"
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        placeholder={t('input lastname')}
        readonly={readonly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('input age')}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('input city')}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('input username')}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('input avatar')}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
        direction="top right"
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
        direction="top right"
      />
    </VStack>
  );
};
