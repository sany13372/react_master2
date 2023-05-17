import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button';

import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonVariant.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <pre className={classNames(cls.preCode, {}, [className])}>
        <code>
          {text}
        </code>
      </pre>
    </div>
  );
});
