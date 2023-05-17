import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <Page
      data-testid="MainPage"
    >
      {t('Main')}
      <p>{t('glavnaya-tekst-posle-h1')}</p>
      <p>{t('glavnaya2.part1')}</p>
      <p><b>{t('glavnaya2.part2')}</b></p>
    </Page>
  );
};

export default MainPage;
