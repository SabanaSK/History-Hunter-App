// HuntItem.js
import React from 'react';
import { View, Text } from 'react-native';

const HuntItem = ({ huntData }) => {
  return (
    <View>
      <Text>Hunt Name: {huntData.huntName}</Text>
      <Text>Hunt Time: {huntData.huntTime}</Text>
    </View>
  );
}

export default HuntItem;
