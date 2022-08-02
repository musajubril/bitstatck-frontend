const API_URL = process.env.NODE_ENV==="production" ? "http://192.168.0.143:8000/api" : "http://192.168.0.143:8000/api";
export const URL = API_URL
// const API_URL = process.env.NODE_ENV==="production" ? "https://bitstack-api.herokuapp.com/api" : "http://localhost:8000/api";
export const SIGN_IN = (type: any) => `${API_URL}/auth/login/${type}`
export const SIGN_UP = `${API_URL}/auth/register`
export const GET_USER = `${API_URL}/auth/user`
