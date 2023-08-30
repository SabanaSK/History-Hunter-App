import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as http from "../../util/http";

import { UserContext } from "../../store/UserContext";

const GetAllUsers = () => {
  const userCtx = useContext(UserContext);

  const filteredUsers = userCtx.users.filter(user => user.id !== userCtx.currentUser.id);

  return (
    <View style={styles.mainContainer}>
      {filteredUsers.length > 0 ? (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.title} >{item.name}</Text>
            </View>
          )}
          numColumns={3}
        />
      ) : (
        <Text>No Users found!</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: '#f4f4f4'
  },
  container: {
    width: 100,  // Fixed width for square
    height: 100,  // Fixed height for square
    margin: 10,
    padding: 15,
    justifyContent: 'center',  // Center content vertically inside the square
    alignItems: 'center',  // Center content horizontally inside the square
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    color: '#333'
  }
});



export default GetAllUsers;
