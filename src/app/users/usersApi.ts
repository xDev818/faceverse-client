import apiClient from '../api/apiClient';

const userServices = {
  getUsers,
};
export default userServices;

async function getUsers() {
  const response = await apiClient.get('user');
  console.log(response);
}