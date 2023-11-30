import { create } from 'zustand';

import { getUsers } from '@/utils/client';

const useUsersStore = create((set, get) => ({
  users: [],
  isLoading: false,
  error: null,
  info: {},
  addUser(newUser) {
    const users = [...get().users, newUser];
    set({ users });
  },
  updateUser(id) {
    const users = get().users.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    set({ users });
  },
  removeUser(id) {
    const users = get().users.filter((t) => t.id !== id);
    set({ users });
  },

  getUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await getUsers();
      // const data = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}User`, fetcher);
      if (!response.ok) throw response;
      set({ isLoading: true, users: response.data });
    } catch (e) {
      let error = e;
      // custom error
      if (e.statusCode === 400) {
        error = await e.message;
      }
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
