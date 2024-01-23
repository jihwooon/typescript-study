import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';
import AlterBanner from '../common/AlterBanner';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  if (error) {
    return <AlterBanner />;
  }

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
