import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  page: string;
  openModal: () => void;
  closeModal: () => void;
  setPage: (page: string) => void;
}

const useModalStore = create<ModalState>(set => ({
  isOpen: false,
  page: '',
  openModal: () => set(state => ({ ...state, isOpen: true })),
  closeModal: () => set(state => ({ ...state, isOpen: false })),
  setPage: page => set({ page }),
}));

export default useModalStore;
