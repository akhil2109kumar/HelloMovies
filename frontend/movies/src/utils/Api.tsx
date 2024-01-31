import axios from "axios";

const apiCaller = (url: string, method: string, data = {}, host: string) => {
  return axios({
    url: `${host}${url}`,
    method,
    data,
    headers: { Authorization: `Token ${localStorage.getItem("token")}` || "" },
  });
};

export default apiCaller;
