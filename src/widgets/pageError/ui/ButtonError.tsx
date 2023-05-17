import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

interface ButtonErrorProps {
  className?: string;
}
// generate error
export const ButtonError = ({ className }: ButtonErrorProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {t('errorButton')}
    </Button>
  );
};
