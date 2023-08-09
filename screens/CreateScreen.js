import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CreateForm from '../components/ScreensComp/CreateForm';
const CreateScreen = () => {
  return (
    <View >
      <CreateForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CreateScreen;
