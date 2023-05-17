import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getAddCommentFormError, getAddCommentFormText } from '../../models/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../models/slices/addCommentFormSlice';

import { classNames } from '@/shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Input comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonVariant.OUTLINE}
          className={cls.btn}
          onClick={onSendHandler}
        >
          {t('send')}
        </Button>
      </VStack>
    </DynamicModuleLoader>

  );
});

export default AddCommentForm;
