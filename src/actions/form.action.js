import axios from 'axios';
export const CUSTOM_WORKOUT = 'CUSTOM_WORKOUT';
export function createPost(props) {
  const request = axios.get('/chest');
  console.log('custom', request);
  return {
    type: CUSTOM_WORKOUT,
    payload: request
  };
}