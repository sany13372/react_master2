import { DropdownDirection } from '@/shared/types/ui';

import style from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': style.optionsBottomLeft,
  'bottom right': style.optionsBottomRight,
  'top right': style.optionsTopRight,
  'top left': style.optionsTopLeft,
};
