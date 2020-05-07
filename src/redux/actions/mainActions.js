import {
  SET_ERROR,
} from '../constants/actionTypes';

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})