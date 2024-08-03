import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  isChecked: boolean;
  onClick: () => void;
}

const CheckIconButton = ({ isChecked, onClick }: Props) => {
  return (
    <CheckIconButtonStyle onClick={onClick}>{isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}</CheckIconButtonStyle>
  );
};

const CheckIconButtonStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default CheckIconButton;
