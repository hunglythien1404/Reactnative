import axios from 'axios';

const API_URL = "http://5bdf00f47ad6890013e9c2f4.mockapi.io/";
const API_URL1 = "https://jsonplaceholder.typicode.com/";

export function callAPI(method, endpoint, data) {
  return axios(
    {
      method: method,
      url: API_URL + endpoint,
      data: data,
    }
  ).catch(err => {
    console.warn(err);
  });
};

export function callAPIList(method, endpoint, data) {
  return axios(
    {
      method: method,
      url: API_URL1 + endpoint,
      data: data,
    }
  ).catch(err => {
    console.warn(err);
  });
};