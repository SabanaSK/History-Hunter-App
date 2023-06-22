import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthForm from './AuthForm';

const AuthContent = () => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false
  });

  return (
    <View style={styles.page} >
      <Text style={styles.text}>Log In</Text>
      <AuthForm />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
  }

});

export default AuthContent;