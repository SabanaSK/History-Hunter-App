import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthForm from './AuthForm';
import FlatButton from '../ui/FlatButton';
import AuthTitle from '../ui/AuthTitle';

const AuthContent = ({ isLogin, onAuthenticate }) => {
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

  const submitHandler = (credentials) => {
    let { email, name, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const nameIsValid = name.length < 10
    if (
      !emailIsValid ||
      !passwordIsValid ||
      !nameIsValid
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        name: !nameIsValid,
      });
      return;
    }
    onAuthenticate({ email, password, name });
  };


  return (
    <View style={styles.page}>
      <AuthTitle title={isLogin ? "Log In" : "Sign in"} />
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Text> Need to make an account?</Text>
        <FlatButton onPress={switchAuthModeHandler}>
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