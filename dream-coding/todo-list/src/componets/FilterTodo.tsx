import styles from './FilterTodo.module.css'

interface Props {
  filters: string[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const Filter = ({ filters, filter, onFilterChange }: Props) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li
            key={index}
          >
            <button
              className={`${styles.filter} ${filter === value ? styles.selected : ''}`}
              onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Filter;
