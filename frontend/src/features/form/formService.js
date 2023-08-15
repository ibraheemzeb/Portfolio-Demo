import axios from "axios";
const API_URL = "/api/contactdata";

const contact = async (Contactform) => {
  const response = await axios.post(API_URL, Contactform);

  if (response.data) {
    localStorage.setItem("form", JSON.stringify(response.data));
  }
  return response.data;
};

const Getcontact = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config);
  // if (response.data) {
  //   localStorage.getItem("form", JSON.stringify(response.data));
  // }

  return response.data;
};

const formService = {
  contact,
  Getcontact
};

export default formService;
