import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const diglog = useRef();
  const [timerStated, setTimerStated] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      diglog.current.showModal();
    }, targetTime * 1000);

    setTimerStated(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal ref={diglog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime}
          {' '}
          second
          {targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button type="button" onClick={timerStated ? handleStop : handleStart}>
            {timerStated ? 'Stop' : 'Start'}
            {' '}
            Challenge
          </button>
        </p>
        <p className={timerStated ? 'active' : undefined}>
          {timerStated ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
