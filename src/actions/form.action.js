import axios from 'axios';
export const CUSTOM_WORKOUT = 'CUSTOM_WORKOUT';
export function createPost(params) {
  const request = axios.get(`/${params.theme}`, { params });
  return {
    type: CUSTOM_WORKOUT,
    payload: request
  };
}