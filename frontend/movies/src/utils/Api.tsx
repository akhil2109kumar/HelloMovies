import axios from "axios";

const apiCaller = (url: string, method: string, data = {}, host: string) => {
  return axios({
    url: `${host}${url}`,
    method,
    data,
    headers: { Authorization: localStorage.getItem("authToken") || "" },
  });
};

export default apiCaller;
