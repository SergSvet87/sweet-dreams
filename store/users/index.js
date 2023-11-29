import { create } from 'zustand';

import { instance } from '@/utils/client';

const useUsersStore = create((set, get) => ({
  users: [],
  isLoading: false,
  error: null,
  info: {},
  updateUserInfo() {
    const users = get().users;
    const { length: total } = users;
    const active = users.filter((t) => !t.done).length;
    const done = total - active;
    const left = Math.round((active / total) * 100) + '%';
    set({ info: { total, active, done, left } });
  },
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
      const response = await instance.get('User');
      if (!response.ok) throw response;
      set({ isLoading: true, users: await response.data });
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
