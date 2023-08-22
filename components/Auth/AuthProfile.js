import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";

import { AuthContext } from "../../store/AuthContext";

const AuthProfile = () => {
  const authCtx = useContext(AuthContext);
  const [userName, setUserName] = useState(null);
  const [pushID, setPushID] = useState(null);
  useEffect(() => {
    const url =
      "https://auth-app-ab7aa-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=" +
      authCtx.token;

    axios
      .get(url)
      .then((resp) => {
        const data = resp.data;
        const pushIds = Object.keys(resp.data);
        setPushID(pushIds);
        console.log(pushID);
        for (const key in data) {
          if (data[key].token === authCtx.token) {
            
            setUserName(data[key].name);
            break;
          }
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);



  return (
    <View>
      <Text>{userName}</Text>
    </View>
  );
};

export default AuthProfile;
