import { Link, useNavigate } from 'react-router-dom';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../api/event.api';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });

  const handleSubmit = (formData) => {
    mutate({ event: formData });
  }; 

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <LoadingIndicator />}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
          </>
        )}
      </EventForm>
        {isError && <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to create event.'} />}
    </Modal>
  );
}
