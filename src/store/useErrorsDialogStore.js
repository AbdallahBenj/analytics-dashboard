import { create } from "zustand";

const useErrorsDialogStore = create((set) => ({
  isDialogOpen: false,
  dialogType: "dashboardData",

  setDialogType: (type) => set({ dialogType: type }),

  // *** Not used on this version

  // openDialog: () =>
  //   set({
  //     isDialogOpen: true,
  //     // dialogType: type,
  //   }),
  // closeDialog: () =>
  //   set({
  //     isDialogOpen: false,
  //     // dialogType: null,
  //   }),
}));

export default useErrorsDialogStore;
