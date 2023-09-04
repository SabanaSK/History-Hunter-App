import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import * as http from "../../util/http";

const GetHunt = () => {
  const [hunts, setHunts] = useState([]);

  useEffect(() => {
    const fetchHunts = async () => {
      try {
        const data = await http.getHunts();

        const dataArray = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });

        setHunts(dataArray);
      } catch (err) {
        console.error("Gethunt error", err.message);
      }
    };

    fetchHunts();
  }, []);

  return (
    <View>
      {hunts.length > 0 ? (
        <FlatList
          data={hunts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            /* Style here */
            <View style={styles.container}>
              <Text style={styles.title}>{item.name}</Text>
              {/* <Text>Estimated Time: {item.estimatedTime}</Text> */}
            </View>
          )}
        />
      ) : (
        <Text>No hunts found!</Text>
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
  },
});

export default GetHunt;
