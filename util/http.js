import axios from "axios"

const API_KEY = "AIzaSyDyaRLOEUZycEYTjG1LVvfCgrx8bImEELo";

const auth = async (mode, email, password) => {
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
  return await auth("signUp", email, password);
};

export const signinUser = async (email, password) => {
  return await auth("signInWithPassword", email, password);
};
