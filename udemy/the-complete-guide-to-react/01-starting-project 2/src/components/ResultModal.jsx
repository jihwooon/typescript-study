import { forwardRef } from 'react';

function ModalContent({ result, targetTime }) {
  return (
    <>
      <h2>
        You
        {' '}
        {result}
      </h2>
      <p>
        The target time was
        {' '}
        <strong>
          {targetTime}
          {' '}
          seconds.
        </strong>
      </p>
      <p>
        You stopped the timer with
        {' '}
        <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button type="button">Close</button>
      </form>
    </>
  );
}

const ResultModal = forwardRef(({ result, targetTime }, ref) => (
  <dialog ref={ref} className="result-modal">
    <ModalContent result={result} targetTime={targetTime} />
  </dialog>
));

export default ResultModal;
