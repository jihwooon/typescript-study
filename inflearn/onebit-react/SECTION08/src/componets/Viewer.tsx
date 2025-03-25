interface Props {
    count: number;
}

const Viewer = ({ count }: Props) => {
    return (
        <div className="counter-display">
          <p>현재카운트:</p>
          {count}
        </div> 
    );
};

export default Viewer;
