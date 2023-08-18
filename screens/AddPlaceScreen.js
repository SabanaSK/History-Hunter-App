import CreateForm from "../components/ScreensComp/CreateForm";

const AddPlaceScreen = ({ navigation }) => {
  const addPlaceHandler = (place) => {
    navigation.navigate("Start", { places: place });
  };
  return <CreateForm addPlaceHandler={addPlaceHandler} />
};

export default AddPlaceScreen;