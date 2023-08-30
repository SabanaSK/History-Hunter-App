import { Text, View, } from "react-native";

import Input from "../components/ui/Input";
import Title from "../components/ui/Title";
import GetAllUsers from "../components/ScreensComp/GetAllUsers";

const InviteFriendsScreen = () => {

  return (
    <View>
      <Title title={"Invite Friends"} />
      <Input
        placeholder="Search"
      />
      <View>
        {/* Selected friends name shows here */}
      </View>
      <View>
        {/* All friends divided by alfabate */}
        <GetAllUsers/>
      </View>
    </View>
  )

};

export default InviteFriendsScreen;