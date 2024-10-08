import axios from "axios";

// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000/api"
//     : "https://api.domain.ir/api";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
