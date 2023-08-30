import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";

import { UserContext } from "../../store/UserContext";
import { AuthContext } from "../../store/AuthContext";
import * as http from "../../util/http"

const AuthName = () => {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const resp = await http.getUser(authCtx.token);
        if (Array.isArray(resp) && resp.length > 0) {
          //console.log("resp", resp)

          const displayName = resp[0].displayName;
          //console.log("display", displayName)

          userCtx.setCurrentUserName({ name: displayName })
          //console.log('userctx', userCtx.currentUserName.name)

        }

      } catch (error) {
        console.error("AuthName", error.response.data)
      }
    }
    fetchUser();
  }, [authCtx, userCtx.currentUserName.name]);

  return (
    <View>
      <Text >{userCtx.currentUserName.name || "No name"}</Text>
    </View>
  );

};

export default AuthName;
