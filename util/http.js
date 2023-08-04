import axios from "axios";

const API_KEY = "AIzaSyDyaRLOEUZycEYTjG1LVvfCgrx8bImEELo";

const authenticate = async (mode, email, password) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return res.data;

};


export const signupUser = async (email, password) => {
  return await authenticate("signUp", email, password);

};

export const signinUser = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);

};