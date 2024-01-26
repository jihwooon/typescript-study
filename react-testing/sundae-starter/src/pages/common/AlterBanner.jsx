import { Alert } from 'react-bootstrap';

export default function AlterBanner({ message, variant }) {
  const alterMessage = message || 'An unexpected error';
  const alterVariant = variant || 'danger';

  return (
    <Alert alterVariant={alterVariant} style={{ backgroundColor: 'red' }}>
      {alterMessage}
    </Alert>
  );
}
