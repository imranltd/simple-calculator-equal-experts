import { useState, MouseEvent } from 'react';
import { Button } from './components';

import { symbolParse, applyClassName } from './components/helper';
import { DIGITS, OPERATORS } from './constants';

import './App.scss';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [rtValue, setRtValue] = useState<Array<string>>([]);

  const clearHandler = () => {
    setCurrentAnswer('');
    setRtValue([]);
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentAnswer('');

    const v = (e.target as HTMLButtonElement).value;

    setRtValue((prevState) => [...prevState, v]);
  };

  const evaluate = () => {
    //eslint-disable-next-line
    const answer = Function(
      'return ' + rtValue.map((v) => symbolParse(v)).join('')
    );
    setCurrentAnswer(String(answer()));
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='header'>Equal Experts Calculator</div>
        <div className='display'>{currentAnswer || rtValue.join('')}</div>
        <div className='controls'>
          <div className='digits'>
            {DIGITS.map((button: number | string) => {
              const fn = button === '=' ? evaluate : clickHandler;
              const cssClass = button === '=' ? 'evaluate' : '';

              return (
                <Button
                  key={button}
                  onClickFn={fn}
                  value={button}
                  cssClass={`style-${applyClassName(button)} ${cssClass}`}
                />
              );
            })}
          </div>

          <div className='opp'>
            {OPERATORS.map((btn) => {
              const fn = btn === 'AC' ? clearHandler : clickHandler;
              const cssClass = btn === 'AC' ? 'clear' : 'operator';
              return (
                <Button
                  key={btn}
                  cssClass={`style-${applyClassName(btn)} ${cssClass}`}
                  onClickFn={fn}
                  value={btn}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
