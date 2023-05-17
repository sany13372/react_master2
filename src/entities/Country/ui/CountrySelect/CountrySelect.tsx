import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../models/types/Country';

import { classNames } from '@/shared/libs/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Country;
  direction?: DropdownDirection,
  onChange?: (value: Country) => void;

}
const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
    direction,
  } = props;
  const { t } = useTranslation('translation');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      label={t('Country')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction={direction}
    />
  );
});
