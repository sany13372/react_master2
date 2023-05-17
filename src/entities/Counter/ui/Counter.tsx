import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { GetCounterValue } from '../model/selectors/getCounterValue/GetCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(GetCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counterValue">{counterValue}</h1>
      <Button
        data-testid="increment"
        onClick={increment}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement"
        onClick={decrement}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
