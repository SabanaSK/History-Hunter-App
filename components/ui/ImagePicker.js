import { View, Dimensions, StyleSheet, Text, Image, Button } from "react-native"
import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import IconButton from "./IconButton";

const ImagePicker = () => {
  const cameraRef = useRef();
  const [photo, setPhoto] = useState();
  const [permission, reqPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={reqPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {

    if (cameraRef.current) {

      const takenPhoto = await cameraRef.current.takePictureAsync({
        quality: 0.7,
        exif: false,
      });
      console.log(takenPhoto)
      setPhoto(takenPhoto);
    };
  };

  let previewContent = <Text>No image taken yet</Text>
  if (photo) {
    previewContent = <Image source={{ uri: photo.uri }} />
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={cameraRef}
        type={CameraType.back}

      >
        <IconButton
          icon="camera-alt"
          size={32}
          color="white"
          onPress={takePicture}
        />
      </Camera>
      <View style={styles.preview}></View>
    </View>
  )
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: width,
    height: height / 2.5,
    alignItems: "center",/* få den i center*/
    justifyContent: "flex-end", /* Få camera att vara längds ner */
  },
  preview: {
    width: width,
    height: height / 2,
    backgroundColor: "blue",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",

  }

});

export default ImagePicker;