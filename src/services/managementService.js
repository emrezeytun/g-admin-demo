import { baseUrl } from '../constants';
import { httpHelper } from '../../src/helper';

async function getUsers() {
  const url = `${baseUrl}/users`;
  return httpHelper.makeGetRequest(url);
}

async function sendPost(payload) {
  const url = `${baseUrl}/posts`;
  const result = await httpHelper.makePostRequest(url, '', payload);
  return result;
}

export { getUsers, sendPost };
