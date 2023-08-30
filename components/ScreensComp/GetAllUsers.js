import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as http from "../../util/http";

import { UserContext } from "../../store/UserContext";

const GetAllUsers = () => {
  const userCtx = useContext(UserContext)
  //console.log("userCtx", userCtx.users);


  return (
    <View>
      {userCtx.users.length > 0 ? (
        <FlatList
          data={userCtx.users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            /* Style here */
            <View style={styles.container}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          )}

        />
      ) : (
        <Text>No Users found!</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 14,
  }
});

export default GetAllUsers;
