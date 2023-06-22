import { useState } from 'react';
import { View, Text } from 'react-native';

import AuthForm from './AuthForm';

const AuthContent = () => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false
  });

  return (
    <View>
      <AuthForm />
    </View>
  );
}

export default AuthContent;