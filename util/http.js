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


export const signupUser = async (email, password) => {
  return await authenticate("signUp", email, password);

};

export const signinUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);

};

export const updateUser = async (displayName, idToken) => {
  const resp = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
    {
      idToken,
      displayName,
      returnSecureToken: true
    }
  );
  console.log('http name', resp.data.displayName)
  return resp.data.localId;
};

export const getUser = async (idToken) => {
  const payload = {
    idToken: idToken,
  };
  try {
    const resp = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`, payload);
    return resp.data.users;
  } catch (error) {
    console.error("user data at http", error.response?.data || error.message);
    throw error;
  }
};

const url = `https://auth-app-ab7aa-default-rtdb.europe-west1.firebasedatabase.app`;

export const saveUsers = async (user) => {
  try {
    await axios.post(`${url}/users.json`, user);
    console.log("Save work");
  } catch (error) {
    console.error("Error during signup", error.response?.data || error.message);
    throw error;
  }
}


