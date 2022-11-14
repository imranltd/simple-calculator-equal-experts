import { MouseEventHandler, ReactElement } from 'react';

import './index.scss';

interface IButton {
  value: number | string;
  onClickFn: MouseEventHandler<HTMLButtonElement>;
  cssClass?: string;
}

export const Button = ({
  value,
  onClickFn,
  cssClass,
}: IButton): ReactElement => (
  <button
    className={`button${cssClass ? ` ${cssClass}` : ''}`}
    onClick={onClickFn}
    value={value}
  >
    {value}
  </button>
);

export const DisplayScreen = ({ value }: { value: string }): ReactElement => {
  return (
    <div className={'display'} data-testid={'display'}>
      {value}
    </div>
  );
};
