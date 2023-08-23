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
  console.log("Response data:", res.data);
  return {
    token: res.data.idToken,
    uid: res.data.localId,
  }

};


export const signupUser = async (email, password, name) => {
  try {
    const { token, uid } = await authenticate("signUp", email, password);
    const url = `https://auth-app-ab7aa-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json?auth=${token}`;
    await axios.post(url, { name });

    return { token, uid };
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const signinUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);

};