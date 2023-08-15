import axios from "axios";
const API_URL = "/api/admin/";

const register = async (Regform) => {
  const response = await axios.post(API_URL, Regform);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};
const login = async (Logform) => {
  const response = await axios.post(API_URL + "login", Logform);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("admin");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
