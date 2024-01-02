import React, { useEffect } from 'react';
import style from './modal.module.css';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  alightItems?: string;
  justifyContent?: string;
  padding?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  justifyContent,
  alightItems,
  padding,
  width,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={style.modal}
      onClick={onClose}
      style={{ justifyContent: justifyContent, padding, alignItems: alightItems }}
    >
      <div style={{ width }} className={style.modalContent} onClick={e => e.stopPropagation()}>
        <span className={style.close} onClick={onClose}>
          <Image width={32} height={32} src={'/images/close-modal.svg'} alt="Close" priority />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
