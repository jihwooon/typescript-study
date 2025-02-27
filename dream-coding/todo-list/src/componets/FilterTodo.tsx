interface Props {
  filters: string[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const Filter = ({ filters, filter, onFilterChange }: Props) => {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Filter;
