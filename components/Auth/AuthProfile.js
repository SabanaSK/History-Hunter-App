import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";

import { AuthContext } from "../../store/AuthContext";

const AuthProfile = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const uid = authCtx.uid;
  const [userName, setUserName] = useState(null);

  console.log("uid", uid)
  useEffect(() => {
    if (uid && token) {
      const url = `https://auth-app-ab7aa-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=${token}`;

      axios
        .get(url)
        .then((resp) => {
          const data = resp.data[uid][Object.keys(resp.data[uid])[0]].name;
          setUserName(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [uid, token]);



  console.log("userName", userName)

  return (
    <View>

      <Text>{userName ? userName : 'No userName'}</Text>

    </View>
  );
};

export default AuthProfile;
