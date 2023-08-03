import axios from "axios"

const API_KEY = "AIzaSyDyaRLOEUZycEYTjG1LVvfCgrx8bImEELo";

export const signupUser = async (email, password) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
};

