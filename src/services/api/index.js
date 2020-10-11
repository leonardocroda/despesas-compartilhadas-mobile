import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://10.0.2.2:3030',
});

const endpoints = {
  groups: {
    list: 'groups',
    create: 'groups',
    addUser: 'groups/AddUser',
  },
  users: {
    create: 'users',
    login: 'users/login',
  },
};

const api = (axiosInstance) => {
  return {
    groups: {
      list: async () => {
        const response = await axiosInstance.get(endpoints.groups.list);
        return response.data;
      },
      create: async (data) => {
        const response = await axiosInstance.post(
          endpoints.groups.create,
          data
        );
        const group = response.data;
        return group;
      },
      addUser: async (groupId, userId) =>
        await axiosInstance.post(endpoints.groups.addUser, {
          group_id: groupId,
          user_id: userId,
        }),
    },
    users: {
      create: async (data) =>
        await axiosInstance.post(endpoints.users.create, data),
      login: async (data) => axiosInstance.post(endpoints.users.login, data),
    },
  };
};
export default api(instance, endpoints);
