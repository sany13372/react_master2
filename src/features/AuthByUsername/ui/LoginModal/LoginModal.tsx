import { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
