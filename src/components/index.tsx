import { MouseEventHandler } from 'react';

import './index.scss';

interface IButton {
  value: number | string;
  onClickFn: MouseEventHandler<HTMLButtonElement>;
  cssClass?: string;
}

export const Button = ({ value, onClickFn, cssClass }: IButton) => (
  <button
    className={`button${cssClass ? ` ${cssClass}` : ''}`}
    onClick={onClickFn}
    value={value}
  >
    {value}
  </button>
);
