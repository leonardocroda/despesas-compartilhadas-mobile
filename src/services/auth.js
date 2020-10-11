import api from './api';

export function signIn(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = { email, password };
      const response = await api.users.login(data);
      resolve(response.data);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}
