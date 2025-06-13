export default function ResultModal({ result, targetTime }) {
  return (
    <diglog className="result-modal">
      <h2>
        You
        {' '}
        {result}
      </h2>
      <p>
        The target time was
        <strong>
          {targetTime}
          {' '}
          seconds.
        </strong>
      </p>
      <p>
        Tou stopped the timer with
        <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button type="button">Close</button>
      </form>
    </diglog>
  );
}
