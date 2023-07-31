import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthForm from './AuthForm';
import FlatButton from '../ui/FlatButton';

const AuthContent = ({ isLogin }) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false
  });

  const switchAuthModeHandler = () => {
    //Todo
    //om isloged in navigera till login annars signin
    //Gö detta senare
  };

  return (
    <View style={styles.page}>
      <AuthForm
        isLogin={isLogin}
      />
      <View>
        <Text> Need to make an account?</Text>
        <FlatButton onPress={switchAuthModeHandler} > 
        {/* isLogin har ej skickat */}
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