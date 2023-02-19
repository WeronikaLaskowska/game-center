import axios from "axios";
export const API_URL = "https://opencritic-api.p.rapidapi.com/";

const instance: any = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common[
  "X-RapidAPI-Key"
] = `059e2102b8mshdb657081bb5353ep161249jsn55128607e7e1`;

instance.defaults.headers.common[
  "X-RapidAPI-Host"
] = `opencritic-api.p.rapidapi.com`;

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (
      error &&
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      //UNAUTHORIZED
    } else if (
      error &&
      error.response &&
      error.response.status &&
      error.response.status === 500
    ) {
      //INTERNAL
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default instance;
