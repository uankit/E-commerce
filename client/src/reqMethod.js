import axios from "axios";

const BASE_URL = "http://localhost:3001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmZiNTYzYmE3YzI0NGEzNWQ3OGExYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDcxMjk5OCwiZXhwIjoxNjM1MzE3Nzk4fQ.VHwg8PwHgb26anWLcIzfECGjmhhpkYsxx7324ZuH6F8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
