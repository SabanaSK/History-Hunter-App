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


export const signupUser = async (email, password, name) => {
  try {
    const token = await authenticate("signUp", email, password);
    const url = `https://auth-app-ab7aa-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=${token}`;
    await axios.post(url, { name });

    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const signinUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);

};