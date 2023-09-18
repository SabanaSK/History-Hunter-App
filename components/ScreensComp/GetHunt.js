import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import * as http from "../../util/http";
import { UserContext } from "../../store/UserContext";
import { HuntContext } from "../../store/HuntContext";

const GetHunt = () => {
  const [localHunts, setLocalHunts] = useState([]);
  const [activeHunts, setActiveHunts] = useState([]);
  const [plannedHunts, setPlannedHunts] = useState([]);
  const [medalHunts, setMedalHunts] = useState([]);
  const navigation = useNavigation();
  const userCtx = useContext(UserContext);
  const currentUser = userCtx.currentUser.id;

  const navigateToConfirmScreen = (huntDetails) => {
    navigation.navigate("ConfirmHunt", { details: huntDetails });
  };

  useEffect(() => {
    const fetchHunts = async () => {
      try {
        const data = await http.getHunts();

        const dataArray = Object.keys(data || {}).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });

        setLocalHunts(dataArray);
      } catch (err) {
        console.error("Gethunt error", err.message);
      }
    };

    fetchHunts();
  }, []);

  useEffect(() => {
    if (localHunts && localHunts.length > 0) {
      const active = localHunts.filter(
        (hunt) =>
          hunt.creator?.id === currentUser && hunt.creator?.status === "Active"
      );

      const planned = localHunts.filter(
        (hunt) =>
          hunt.creator?.id !== currentUser &&
          hunt.invitees?.some(
            (invitee) =>
              invitee.id === currentUser && invitee.status === "Planned"
          )
      );
      const medal = localHunts.filter(
        (hunt) =>
          (hunt.creator?.id === currentUser &&
            hunt.creator?.status === "Medal") ||
          hunt.invitees?.some(
            (invitee) =>
              invitee.id === currentUser && invitee.status === "Medal"
          )
      );
      setActiveHunts(active);
      setPlannedHunts(planned);
      setMedalHunts(medal);
    }
  }, [localHunts]);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigateToConfirmScreen(item)}>
      <View style={styles.container}>
        <Text style={styles.Text}>{item.name}</Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <View>
        <Text style={styles.title}>Active Hunts</Text>
        <FlatList
          data={activeHunts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Text style={styles.title}>Planned Hunts</Text>
        <FlatList
          data={plannedHunts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Text style={styles.title}>Medal Hunts</Text>
        <FlatList
          data={medalHunts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#FF0075",
  },
});

export default GetHunt;
