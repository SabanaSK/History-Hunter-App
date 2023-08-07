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
  return res.data.idToken;

};


export const signupUser = (email, password) => {
  return authenticate("signUp", email, password);

};

export const signinUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);

};