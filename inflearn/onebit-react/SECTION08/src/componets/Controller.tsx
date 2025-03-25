
interface Props {
  onClickButton : (value: number) => void;
}

const Controller = ({ onClickButton }: Props) => {
  const buttonValues = [-100, -10, -1, 1, 10, 100];

  return (
    <div>
      {
        buttonValues.map((value) => (
          <button
            key={value}
            onClick={() => onClickButton(value)}
          >
            {value > 0 ? `+${value}` : value}
          </button>
        ))
      }
    </div>
  );
};

export default Controller;