import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthForm from './AuthForm';
import FlatButton from '../ui/FlatButton';
import AuthTitle from '../ui/AuthTitle';

const AuthContent = ({ isLogin }) => {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    name: false,
    password: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  };

  /* Submithandler here */

  return (
    <View style={styles.page}>
      <AuthTitle title={isLogin ? "Log In" : "Sign in"} />
      <AuthForm
        isLogin={isLogin}
      />
      <View>
        <Text> Need to make an account?</Text>
        <FlatButton onPress={switchAuthModeHandler} >
          {isLogin ? "Sign Up here" : "Go to login"}
        </FlatButton>
      </View>
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