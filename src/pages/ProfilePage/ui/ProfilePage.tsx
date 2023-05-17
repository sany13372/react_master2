import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/libs/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id && __PROJECT !== 'storybook') {
    return <Text text={t('profile not found')} />;
  }
  return (
    <Page
      className={classNames('', {}, [className])}
      data-testid="ProfilePage"
    >
      <VStack gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;
