import { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <ModelStyle onClick={handleOverlayClick}>
          <div className="modal-body">
            <div className="modal-contents">
              {children}
              <button className="modal-close" onClick={handleClose}>
                <FaPlus />
              </button>
            </div>
          </div>
        </ModelStyle>
      )}
    </>
  );
};

const ModelStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vm;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 56px 32px 32px;

    background-color: #fff;
    max-width: 80%;
  }

  .modal-close {
    border: none;
    background-color: transparent;
    cursor: pointer;

    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;

    svg {
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
    }
  }
`;

export default Modal;
