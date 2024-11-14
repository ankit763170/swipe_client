import { create } from "zustand";
export const useAuthStore = create((set) => ({
  authUser: "",
  checkingAuth: true,
  checkAuth: async () => {
    try {
    } catch (error) {}
  },
}));
