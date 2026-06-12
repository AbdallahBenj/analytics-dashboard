import { create } from "zustand";

const useErrorsDialogStore = create((set) => ({
  isOpen: false,
  dialogType: null,

  openDialog: (type) =>
    set({
      isOpen: true,
      dialogType: type,
    }),
  closeDialog: () =>
    set({
      isOpen: false,
      dialogType: null,
    }),
}));

export default useErrorsDialogStore;
