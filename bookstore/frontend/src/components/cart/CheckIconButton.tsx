import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  isChecked: boolean;
  onClick: () => void;
}

const CheckIconButton = ({ isChecked, onClick }: Props) => {
  return (
    <CheckIconButtonStyle onClick={onClick}>
      {isChecked ? <FaRegCircle /> : <FaRegCheckCircle />}
    </CheckIconButtonStyle>
  );
};

const CheckIconButtonStyle = styled.button``;

export default CheckIconButton;
